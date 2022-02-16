import React, { memo, useState, useRef } from 'react';

import { Child_2_ClassCmp } from './components';

const UseEffectVsUseLayoutEffect = props => {
  const [displaytest, setDisplayTest] = useState(false);
  const [counter] = useState(0);

  const el = useRef(null);

  // useLayoutEffect(() => {
  //   console({
  //     value: `useLayoutEffect 1: ${displaytest} ${counter}`,
  //     color: 'black',
  //     bgColor: 'lightBlue'
  //   });

  //   return () =>
  //     console({
  //       value: `return useLayoutEffect 1: ${displaytest} ${counter}`,
  //       color: 'white',
  //       bgColor: 'blue'
  //     });
  // }, [displaytest, counter]);

  // useEffect(() => {
  //   console({
  //     value: `useEffect 2: ${displaytest} ${counter}`,
  //     color: 'white',
  //     bgColor: 'green'
  //   });

  //   setCounter(prevCounter => prevCounter + 1);

  //   return () =>
  //     console({
  //       value: `return useEffect 2: ${displaytest} ${counter}`,
  //       color: 'black',
  //       bgColor: 'lightGreen'
  //     });
  // }, [displaytest]);

  // console({
  //   value: `render: ${displaytest} ${counter}`,
  //   color: 'black',
  //   bgColor: 'pink'
  // });

  return (
    <div ref={el}>
      <button
        onClick={() => {
          setDisplayTest(prevState => !prevState);
        }}
      >
        Toggle Display Test
      </button>
      {displaytest ? <div>Test</div> : null}
      <div>{counter}</div>
      {displaytest ? (
        <>
          {/* <Child_1 /> */}
          <Child_2_ClassCmp />
        </>
      ) : null}
    </div>
  );
};

export default memo(UseEffectVsUseLayoutEffect);
