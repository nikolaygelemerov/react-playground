import { memo, useState, useEffect, useCallback } from 'react';

const UseEffectDependency = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const callback = useCallback(() => {
    console.log('Unmount count: ', count, count2);
  }, [count, count2]);

  const callback2 = useCallback(() => {
    console.log('callback1: ');
    callback();
  }, [callback]);

  useEffect(() => {
    callback();
    callback2();

    return () => {
      console.log('Unmount count: ', count);
      callback();
    };
  });

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(prevState => prevState + 1);
        }}
      >
        Update {count}
      </button>
      <button
        type="button"
        onClick={() => {
          setCount2(prevState => prevState + 1);
        }}
      >
        Update 2 {count}
      </button>
    </div>
  );
};

export default memo(UseEffectDependency);
