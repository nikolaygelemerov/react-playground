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

  const onClickHandler = useCallback(async () => {
    console.log(setCount(prevState => prevState + 1) instanceof Promise);
    await setCount(prevState => prevState + 1);

    console.log('count: ', count);
  }, [count, setCount]);

  console.log('render count: ', count);

  return (
    <div>
      <button onClick={onClickHandler}>Click me</button>
      <div>Count is {count}</div>
    </div>
  );
};

export default memo(UseAsyncState);
