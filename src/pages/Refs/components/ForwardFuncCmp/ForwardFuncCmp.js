import React, { forwardRef, memo } from 'react';

const ForwardFuncCmp = forwardRef((props, ref) => {
  return <div ref={ref}>ForwardFuncCmp</div>;
});

export default memo(ForwardFuncCmp);
