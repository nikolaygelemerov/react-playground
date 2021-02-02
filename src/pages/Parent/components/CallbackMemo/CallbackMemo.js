import React, { memo } from 'react';

const CallbackMemo = ({ count, updateCount }) => {
  return (
    <button type="button" onClick={updateCount}>
      {count.count.count}
    </button>
  );
};

export default memo(CallbackMemo);
