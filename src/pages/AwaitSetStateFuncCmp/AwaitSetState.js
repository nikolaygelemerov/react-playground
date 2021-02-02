import React, { memo, useCallback, useLayoutEffect, useState } from 'react';

import { console, useUpdate } from '../../services';

const AwaitSetState = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const update = useCallback(async () => {
    console({
      value: `Func countOne before: ${countOne}`,
      color: 'black',
      bgColor: 'lightBlue'
    });

    // await setState (none documented behaviour).
    await setCountOne(prevCount => prevCount + 1);

    console({
      value: `Func countOne after: ${countOne}`,
      color: 'black',
      bgColor: 'pink'
    });

    // setCountTwo(prevCount => prevCount + 1);
  }, [countOne]);

  useLayoutEffect(() => {
    console({
      value: `USE_LAYOUT_EFFECT count one: ${countOne}`,
      color: 'black',
      bgColor: 'red'
    });
  });

  useUpdate(async () => {
    console({
      value: `USE_UPDATE count one: ${countOne}`,
      color: 'black',
      bgColor: 'lightgreen'
    });

    setCountTwo(prevCount => prevCount + 1);
  }, [countOne]);

  useUpdate(() => {
    console({
      value: `USE_UPDATE 2 count one: ${countOne}`,
      color: 'black',
      bgColor: 'yellow'
    });
  }, [countOne]);

  useUpdate(() => {
    console({
      value: `USE_UPDATE count two: ${countTwo}`,
      color: 'black',
      bgColor: 'lightgrey'
    });
  }, [countTwo]);

  console({
    value: `RENDER count one: ${countOne}`,
    color: 'black',
    bgColor: 'orange'
  });

  return (
    <div>
      <button onClick={update} type="button">
        Update
      </button>
    </div>
  );
};

export default memo(AwaitSetState);
