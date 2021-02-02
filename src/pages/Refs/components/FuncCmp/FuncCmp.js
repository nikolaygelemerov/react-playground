import React, { memo } from 'react';

const FuncCmp = ({ onRef }) => {
  return <div ref={onRef}>FuncCmp</div>;
};

export default memo(FuncCmp);
