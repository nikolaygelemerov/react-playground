import React, { memo, useEffect, useRef, useState } from 'react';

import { useUnmount, useIsMounted } from '@rounik/react-custom-hooks';

const useMount = callback => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      callback();
      mountedRef.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useUpdateOnly = (callback, dependencyList = []) => {
  const prevDependencyListRef = useRef(dependencyList);

  useEffect(() => {
    const hasChange = dependencyList.some(
      (dep, depIndex) => dep !== prevDependencyListRef.current[depIndex]
    );

    if (!hasChange) {
      return;
    }

    prevDependencyListRef.current = dependencyList;

    const result = callback();

    return () => {
      (async () => {
        const func = await result;

        if (typeof func === 'function') {
          func();
        }
      })();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);
};

const Mount = () => {
  const [update, setUpdate] = useState({});

  useMount(() => {
    //   console.log('USE MOUNT');
  });

  useUpdateOnly(() => {
    console.log('USE UPDATE ONLY');
  }, [update]);

  useEffect(() => {
    // console.log('MOUNT EFFECT');

    return () => {
      // console.log('UNMOUNT EFFECT');
    };
  }, []);

  useUnmount(() => {
    // console.log('USE UNMOUNT');
  });

  return (
    <div>
      <button
        onClick={() => {
          setUpdate({});
        }}
        type="button"
      >
        Update
      </button>
    </div>
  );
};

export default memo(Mount);
