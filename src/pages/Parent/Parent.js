import React, {
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
  useState
} from 'react';

import { CallbackMemo, Func, FuncMemo } from './components';

const Parent = props => {
  const [match, setMatch] = useState(false);
  const [count, setCount] = useState({ count: { count: 0 } });

  //usually useMemo is used for memoizing function output
  //and useCallback is used for memoizing functions
  // const memoCallback = useMemo(() => () => {}, []); // same as useCallback but returns a function
  // const callback = useCallback(() => {
  //   console.log(match);
  // }, [match]);

  const updateCount = useCallback(() => {
    console.log('count: ', count);
    setCount(prevCount => ({ count: { count: prevCount.count.count + 1 } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  const computed = useMemo(() => {
    console.log('I am in memo!'); //this wont be executed because the function is memoized

    return 'computed';
  }, []); //defines which props to track for new updates of the memoized function

  useEffect(() => {
    console.log('use effect');

    return () => console.log('use effect callback');
  }, [match]);

  useLayoutEffect(() => {
    console.log('use layout effect');

    return () => console.log('use layout effect callback');
  }, [match]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setTimeout(() => {
            setMatch(prev => !prev);
          }, 500);
        }}
      >
        Click Here
      </button>
      <br />
      <br />
      <Func computed={computed} />
      <br />
      <FuncMemo computed={computed} match={match} />
      <br />
      <CallbackMemo count={count} updateCount={updateCount} />
    </>
  );
};

export default Parent;
