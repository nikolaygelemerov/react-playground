import { useEffect, useRef } from 'react';

export const useMount = callback => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
};

export const useUnmount = callback => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => callback, []);
};

export const useUpdate = (callback, deps = []) => {
  useEffect(() => {
    const result = callback();

    return async () => {
      const func = await result;

      if (typeof func === 'function') {
        func();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export const useUpdateOnly = (callback, deps = []) => {
  const mountRef = useRef(false);

  useEffect(() => {
    if (mountRef.current === false) {
      mountRef.current = true;

      return;
    }

    const result = callback();

    return async () => {
      const func = await result();

      if (typeof func === 'function') {
        func();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
