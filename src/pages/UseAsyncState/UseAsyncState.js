import {
  memo,
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react';

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

const blocker = () => {
  const now = Date.now();

  while (Date.now() < now + 2000) {}
};

const UseAsyncState = props => {
  const [count, setCount] = useState(0);
  const [count_1, setCount_1] = useState(0);
  const colorRef = useRef('red');

  const onClickHandler = useCallback(() => {
    setTimeout(() => {
      console.log(
        'TIMEOUT count: ',
        document.querySelector('#count').textContent
      );
    });

    requestAnimationFrame(() => {
      console.log('RAF count: ', document.querySelector('#count').textContent);
    });

    setCount(prevState => {
      console.log('prevState count 1: ', prevState);

      return prevState + 1;
    });

    console.log('BETWEEN');

    setCount(prevState => {
      console.log('prevState count 2: ', prevState);

      colorRef.current = 'green';

      return prevState;
    });

    queueMicrotask(() => {
      console.log(
        'MICROTASK count: ',
        document.querySelector('#count').textContent
      );
    });
  }, []);

  useEffect(() => {
    console.log('EFFECT count: ', document.querySelector('#count').textContent);
  }, [count]);

  useLayoutEffect(() => {
    blocker();

    console.log(
      'LAYOUT EFFECT count: ',
      document.querySelector('#count').textContent
    );
  }, [count]);

  console.log('RENDER count: ', count);

  return (
    <div>
      <button onClick={onClickHandler}>Click me</button>
      <div id="count" style={{ color: colorRef.current }}>
        Count is {count}
      </div>
    </div>
  );
};

export default memo(UseAsyncState);
