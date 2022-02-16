import React, { memo, useCallback, useState } from 'react';

import { ChildTwo } from './components';

const Unmount = () => {
  const [showChildOne, setShowChildOne] = useState(true);

  const onChildOneUnmount = useCallback(data => {
    console.log('data: ', data);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setShowChildOne(prevShowChildOne => !prevShowChildOne);
        }}
      >
        Toggle Child One
      </button>
      {showChildOne ? <ChildTwo onChildOneUnmount={onChildOneUnmount} /> : null}
    </>
  );
};

export default memo(Unmount);
