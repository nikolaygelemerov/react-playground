import React, { memo, useCallback, useState } from 'react';

import { console, useUpdate } from '../../services';

let a = 20;

const AwaitSetState = ({ prop }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const updateCountOne = useCallback(async () => {
    console({
      bgColor: 'lightBlue',
      color: 'black',
      value: `Func count ONE, a, prop, before: ${countOne}, ${a}, ${prop.a}`
    });

    // await setState (none documented behaviour).
    await setCountOne(prevCount => prevCount + 1);

    console({
      bgColor: 'blue',
      color: 'white',
      value: `Func count ONE after: ${countOne}`
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
      bgColor: 'lightgreen',
      color: 'black',
      value: `USE_UPDATE 1 count ONE, count TWO, before: ${countOne}, ${countTwo}`
    });

    await setCountTwo(prevCount => prevCount + 1);

    console({
      bgColor: 'green',
      color: 'white',
      value: `USE_UPDATE 1 count ONE, count TWO after: ${countOne}, ${countTwo}, ${a}`
    });
  }, [countOne]);

  useUpdate(() => {
    console({
      bgColor: 'yellow',
      color: 'black',
      value: `USE_UPDATE 2 count ONE: ${countOne}`
    });
  }, [countOne]);

  useUpdate(() => {
    a = a + 1;
    console({
      bgColor: 'lightgrey',
      color: 'black',
      value: `USE_UPDATE 1 count TWO: ${countTwo}`
    });
  }, [countTwo]);

  console({
    bgColor: 'orange',
    color: 'black',
    value: `RENDER count ONE: ${countOne}`
  });

  console({
    bgColor: 'orange',
    color: 'black',
    value: `RENDER count TWO: ${countTwo}`
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
