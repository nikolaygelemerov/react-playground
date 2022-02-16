import React, { memo, useState } from 'react';

import { useUnmount } from '../../../../services';

const ChildOne = ({ children, onChildOneUnmount }) => {
  const [count, setCounter] = useState(0);
  const [, setCounter1] = useState(0);
  console.log('children: ', children);
  useUnmount(onChildOneUnmount, { count });

  return (
    <>
      <button
        onClick={() => {
          setCounter(prevCount => prevCount + 1);
        }}
        type="button"
      >
        Update counter
      </button>
      <button
        onClick={() => {
          setCounter1(prevCount => prevCount + 1);
        }}
        type="button"
      >
        Update counter 1
      </button>
    </>
  );
};

export default memo(ChildOne);
