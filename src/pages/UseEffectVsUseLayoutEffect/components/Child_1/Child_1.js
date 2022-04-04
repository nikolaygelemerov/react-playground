import React, { memo, useEffect, useState } from 'react';

const blocker = () => {
  const now = Date.now();

  while (Date.now() < now + 2000) {}
};

const Child_1 = () => {
  //  const [arr, setArr] = useState([]);
  const [color, setColor] = useState('red');
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    blocker();

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
