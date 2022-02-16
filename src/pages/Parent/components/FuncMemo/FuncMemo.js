import React, { memo, useEffect, useState } from 'react';

const setMatch = match => {
  console.log('match: ', match);
  return match;
};

const FuncMemo = props => {
  const { match } = props;

  const [matchSync] = useState(setMatch(match));
  console.log('matchSync: ', matchSync);

  // const promise1 = useMemo(
  //   () =>
  //     new Promise((resolve, reject) => {
  //       resolve('resolve');
  //       reject('reject');
  //     }),
  //   []
  // );

  const [promiseResult] = useState('');

  // const promiseHandler = useCallback(async () => {
  //   try {
  //     const promiseResult = await promise1;

  //     setPromiseResult(promiseResult);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [promise1]);

  useEffect(() => {
    console.log('useEffect match', match);
    //promiseHandler();
  }, [match]);

  return <div>{promiseResult}</div>;
};

export default memo(FuncMemo);
