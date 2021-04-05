import { memo, useEffect, useLayoutEffect, useState } from 'react';

const Child_1 = () => {
  const [arr, setArr] = useState([]);
  const [color, setColor] = useState('red');
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    let x = 0;

    while (x < 999999999) {
      x++;
    }
    setColor('orange');
    setMarginTop(50);
  }, []);

  return (
    <div
      style={{
        backgroundColor: color,
        width: '100%',
        height: 100,
        marginTop
      }}
    >
      Child 1
    </div>
  );
};

export default memo(Child_1);
