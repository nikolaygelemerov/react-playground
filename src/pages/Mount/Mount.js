import React, { memo, useEffect, useRef, useState } from 'react';

import { useUnmount } from '@rounik/react-custom-hooks';

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

export const useEffectOnce = callback => {
  const cleanupCallback = useRef();
  const isEffectCalled = useRef(false);
  const isRenderedAfterEffect = useRef(false);
  const [, forceUpdate] = useState({});

  if (isEffectCalled.current) {
    isRenderedAfterEffect.current = true;
  }

  useEffect(() => {
    // Executes effect only once
    if (!isEffectCalled.current) {
      cleanupCallback.current = callback();
      isEffectCalled.current = true;
    } else {
      // In React StrictMode the effect
      // is called twice, but without
      // rendering between
      forceUpdate({});
    }

    return () => {
      (async () => {
        // This prevents cleanup to be called
        // after the 1st effect is cleaned up
        // in StrictMode
        if (!isRenderedAfterEffect.current) {
          return;
        }

        // Otherwise this is not a dummy destroy, so call the destroy func
        if (typeof cleanupCallback.current === 'function') {
          await cleanupCallback.current();
        }
      })();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// const useUnmount = cleanupCallback => {
//   const updatedCleanupCallback = useUpdatedRef(cleanupCallback);

//   useEffectOnce(() => {
//     return updatedCleanupCallback.current;
//   }, []);
// };

const useMount = callback => {
  useEffectOnce(callback, []);
};

const Mount = () => {
  const [update, setUpdate] = useState({});

  console.log('RENDER');

  useMount(() => {
    console.log('USE MOUNT');
  });

  useEffect(() => {
    console.log('EFFECT');
  }, []);

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
    console.log('USE UNMOUNT');
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
