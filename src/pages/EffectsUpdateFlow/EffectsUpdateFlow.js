import React, { memo, useState } from 'react';

import { console, useUpdateOnly } from '../../services';

const EffectsUpdateFlow = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useUpdateOnly(async () => {
    await setCounter1(prevState => prevState + 10);

    console({
      bgColor: 'red',
      value: `1st USE_UPDATE_ONLY Counter1: ${counter1}`
    });
  }, [counter2]);

  useUpdateOnly(() => {
    console({
      bgColor: 'lightgreen',
      value: `2nd USE_UPDATE_ONLY Counter1: ${counter1}`
    });
  }, [counter1]);

  console({ bgColor: 'orange', value: `RENDER Counter1: ${counter1}` });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCounter1(prevState => prevState + 1);
        }}
      >
        Counter 1 {counter1}
      </button>
      <button
        type="button"
        onClick={() => {
          setCounter2(prevState => prevState + 1);
        }}
      >
        Counter 2 {counter2}
      </button>
    </>
  );
};

export default memo(EffectsUpdateFlow);
