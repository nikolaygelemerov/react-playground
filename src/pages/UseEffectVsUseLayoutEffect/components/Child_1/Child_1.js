import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { console as consoleSrv } from '../../../../services';

const blocker = () => {
  const now = Date.now();

  while (Date.now() < now + 2000) {}
};

const Child_1 = () => {
  //  const [arr, setArr] = useState([]);
  const [color, setColor] = useState('red');
  const [marginTop, setMarginTop] = useState(0);

  const update = useCallback(() => {
    blocker();

    setColor('orange');
    setMarginTop(50);
  }, [color]);

  useEffect(() => {
    consoleSrv({
      value: `useEffect ${color}`,
      bgColor: 'lightblue',
      color: 'white'
    });

    update();

    return () =>
      consoleSrv({
        value: `useEffect return ${color}`,
        bgColor: 'blue',
        color: 'white'
      });
  }, [color]);

  useLayoutEffect(() => {
    consoleSrv({
      value: `useLayoutEffect ${color}`,
      bgColor: 'lightgreen',
      color: 'white'
    });

    update();

    return () =>
      consoleSrv({
        value: `useLayoutEffect return ${color}`,
        bgColor: 'green',
        color: 'white'
      });
  }, [color]);

  requestAnimationFrame(() => {
    console.time('start');
    consoleSrv({ value: `RAF ${color}`, bgColor: 'pink', color: 'white' });
    console.timeEnd('start');
  });

  return (
    <div
      style={{
        backgroundColor: color,
        height: 100,
        marginTop,
        width: '100%'
      }}
    >
      Child 1
    </div>
  );
};

export default memo(Child_1);
