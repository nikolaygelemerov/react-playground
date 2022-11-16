import { memo, useEffect, useLayoutEffect, useState } from 'react';

const blocker = () => {
  const now = Date.now();

  while (Date.now() < now + 2000) {}
};

const Child_1 = () => {
  //  const [arr, setArr] = useState([]);
  const [color, setColor] = useState('red');
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    console.log('useEffect: ', color);

    return () => console.log('useEffect return: ', color);
  }, [color]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');

    blocker();

    setColor('orange');
    setMarginTop(50);

    return () => console.log('useLayoutEffect return');
  }, []);

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
