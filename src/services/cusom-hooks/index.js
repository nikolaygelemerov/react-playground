/* eslint-disable */
import { useCallback, useEffect, useReducer, useRef } from 'react';

/**
 * Use mount to execute callback on component mounting.
 *
 * @param {Function} callback
 * @returns {*}
 */
export const useMount = callback => {
  useEffect(() => {
    callback();
  }, []);
};

/**
 * Use mount to execute callback on component mounting.
 *
 * @param {Function} callback
 * @param {Object} deps
 * @returns {*}
 */
export const useUnmount = (callback, deps = {}) => {
  const ref = useRef({});

  useEffect(() => {
    ref.current = deps;
  }, Object.values(deps));

  useEffect(() => () => callback(ref.current), []);
};

/**
 * Use update to execute callback on specified list of dependencies changes.
 *
 * @param {Function} callback
 * @param {Array} deps
 * @returns {*}
 */
export const useUpdate = (callback, deps = []) => {
  useEffect(() => {
    callback();
  }, deps);
};

/**
 * Use update to execute callback on specified list of dependencies changes.
 * Initial mounting of component is skipped.
 *
 * @param {Function} callback
 * @param {Array} deps
 * @returns {*}
 */
export const useUpdateOnly = (callback, deps = []) => {
  const mountRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }
    callback();
  }, deps);
};

/**
 * User previous value of state property in functional react component.
 *
 * @param {*} value
 * @returns {*}
 */
export const usePrevious = (value, strict) => {
  const ref = useRef(value);
  const refOld = useRef(ref.current);

  useUpdateOnly(() => {
    refOld.current = ref.current;
    ref.current = value;
  }, [value]);

  return strict ? refOld.current : ref.current;
};

/**
 * Keeps track of the functional component's
 * lifecycle:
 * 0 - the component is not yet rendered
 * 1 - component is rendered
 * 2 - component is being unmounted
 * @returns {React.MutableRefObject<number>}
 */
export const useMountStatus = () => {
  const isMounted = useRef(0);

  useEffect(() => {
    isMounted.current = 1;

    return () => (isMounted.current = 2);
  }, []);

  return isMounted;
};

export const MOUNT_STATUS_NOT_RENDERED = 0;
export const MOUNT_STATUS_MOUNTED = 1;
export const MOUNT_STATUS_UNMOUNTED = 2;

const actionStatusReducer = (state, { payload, type }) => {
  switch (type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    case 'DONE':
      return {
        ...state,
        calledOnce: true,
        data: payload,
        error: null,
        loading: false
      };
    case 'ERROR':
      return {
        ...state,
        calledOnce: true,
        data: null,
        error: payload,
        loading: false
      };
    case 'RESET':
      return {
        ...state,
        calledOnce: null,
        data: null,
        error: null,
        loading: false,
        ...payload
      };
    default:
      return state;
  }
};

/**
 * Return action and object representing the action's status:
 * if it's loading, if there is data or an error.
 *
 * @param action {Function}
 * @param deps {Array<*>}
 * @returns {[Function, {data: null, loading: boolean, error: null}]}
 */
export const useActionStatus = (action, deps = [], initialState = {}) => {
  const [actionStatus, dispatch] = useReducer(actionStatusReducer, {
    loading: false,
    data: null,
    error: null,
    ...initialState
  });

  // Clear before wiredAction is completed and on deps prop update.
  // For exapmle on scroll virtualizer page number is passes as a reset dependency.
  useEffect(() => {
    dispatch({
      type: 'RESET',
      payload: initialState
    });
  }, deps);

  const wiredAction = useCallback(async (...args) => {
    dispatch({
      type: 'LOADING'
    });

    try {
      const res = await action(...args);
      dispatch({
        type: 'DONE',
        payload: res
      });

      return res;
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      });

      return Promise.reject(error);
    }
  }, deps);

  return [wiredAction, actionStatus];
};
