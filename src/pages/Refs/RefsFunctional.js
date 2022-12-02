import React, { memo, useLayoutEffect, useRef } from 'react';

import { ClassCmp, ForwardFuncCmp, FuncCmp } from './components';

const Refs = () => {
  const classCmpRef = useRef(null); // same as React.createRef(null)
  const forwardCmpRef = React.createRef(null); // same as useRef(null)
  const funcCmpRef = useRef(null);

  const funcCmpRefHandler = el => (funcCmpRef.current = el);

  useLayoutEffect(() => {
    if (classCmpRef && classCmpRef.current) {
      console.log('classCmpRef.current: ', classCmpRef.current); // intance of ClassCmp component
    }

    if (forwardCmpRef && forwardCmpRef.current) {
      console.log('forwardCmpRef.current: ', forwardCmpRef.current); // object with prop current {current: div}
    }

    if (funcCmpRef && funcCmpRef.current) {
      console.log('funcCmpRef.current: ', funcCmpRef.current); // DOM element (div)
    }
  });

  return (
    <div>
      <ClassCmp ref={classCmpRef} />
      <ForwardFuncCmp ref={forwardCmpRef} />
      <FuncCmp onRef={funcCmpRefHandler} />
    </div>
  );
};

export default memo(Refs);
