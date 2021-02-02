import React, { memo, useEffect, useRef, useState } from 'react';

/**
 * User previous value of state property in functional react component.
 *
 * @param {*} value
 * @returns {*}
 */
export const usePrevious = value => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const UsePrevious = () => {
  const [count, upddateCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    console.log('prevCount: ', prevCount);
    console.log('count: ', count);
  }, [count]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          upddateCount(prevCount => prevCount + 1);
        }}
      >
        + {count}
      </button>
    </>
  );
};

export default memo(UsePrevious);
