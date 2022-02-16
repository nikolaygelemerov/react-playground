import React, { memo, useCallback, useState } from 'react';

import { console, useUpdate } from '../../services';

let a = 20;

const AwaitSetState = ({ prop }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const updateCountOne = useCallback(async () => {
    console({
      value: `Func count ONE, a, prop, before: ${countOne}, ${a}, ${prop.a}`,
      color: 'black',
      bgColor: 'lightBlue'
    });

    // await setState (none documented behaviour).
    await setCountOne(prevCount => prevCount + 1);

    console({
      value: `Func count ONE after: ${countOne}`,
      color: 'white',
      bgColor: 'blue'
    });

    // setCountTwo(prevCount => prevCount + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countOne]);

  const updateCountTwo = useCallback(async () => {
    setCountTwo(prevCount => prevCount + 1);
  }, []);

  // useLayoutEffect(() => {
  //   console({
  //     value: `USE_LAYOUT_EFFECT count ONE: ${countOne}`,
  //     color: 'black',
  //     bgColor: 'red'
  //   });
  // });

  useUpdate(async () => {
    console({
      value: `USE_UPDATE 1 count ONE, count TWO, before: ${countOne}, ${countTwo}`,
      color: 'black',
      bgColor: 'lightgreen'
    });

    await setCountTwo(prevCount => prevCount + 1);

    console({
      value: `USE_UPDATE 1 count ONE, count TWO after: ${countOne}, ${countTwo}, ${a}`,
      color: 'white',
      bgColor: 'green'
    });
  }, [countOne]);

  useUpdate(() => {
    console({
      value: `USE_UPDATE 2 count ONE: ${countOne}`,
      color: 'black',
      bgColor: 'yellow'
    });
  }, [countOne]);

  useUpdate(() => {
    a = a + 1;
    console({
      value: `USE_UPDATE 1 count TWO: ${countTwo}`,
      color: 'black',
      bgColor: 'lightgrey'
    });
  }, [countTwo]);

  console({
    value: `RENDER count ONE: ${countOne}`,
    color: 'black',
    bgColor: 'orange'
  });

  console({
    value: `RENDER count TWO: ${countTwo}`,
    color: 'black',
    bgColor: 'orange'
  });

  return (
    <div>
      <button onClick={updateCountOne} type="button">
        Update Count One
      </button>
      <button onClick={updateCountTwo} type="button">
        Update Count Two
      </button>
    </div>
  );
};

export default memo(AwaitSetState);
