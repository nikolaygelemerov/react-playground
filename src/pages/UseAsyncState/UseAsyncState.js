import React, { memo, useCallback, useState } from 'react';

// This is a workaround of useEffect(() => {}, [count])
// const useAsyncState = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const setter = x =>
//     new Promise(resolve => {
//       setValue(x);
//       resolve(x);
//     });
//   return [value, setter];
// };

// const foo = () => {
//   console.log('foo');
// };

const UseAsyncState = props => {
  const [count, setCount] = useState(0);
  const [count_1, setCount_1] = useState(0);

  const onClickHandler = useCallback(async () => {
    setCount(prevState => prevState + 1);
    setCount_1(prevState => prevState + 1);
  }, []);

  // const updateCb = useCallback(async () => {
  //   console.log('UPDATE before count_1: ', count_1);

  //   await setCount_1(prevState => prevState + 1);

  //   console.log('UPDATE after count_1: ', count_1);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [count]);

  // useEffect(updateCb, [updateCb]);

  console.log('render count, count_1: ', count, count_1);

  return (
    <div>
      <button onClick={onClickHandler}>Click me</button>
      <div>Count is {count}</div>
    </div>
  );
};

export default memo(UseAsyncState);
