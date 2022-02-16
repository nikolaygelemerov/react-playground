import React, { memo, useState } from 'react';

import { Child1 } from './components';

const DefaultObjectProps = () => {
  const [counter, setCounter] = useState(0);
  const [, setList] = useState([]);

  return (
    <div>
      <Child1 counter={counter} />
      <button
        onClick={() => {
          setCounter(prevState => prevState + 1);
        }}
      >
        Update counter
      </button>
      <button
        onClick={() => {
          setList(prevState => [...prevState, Math.floor(Math.random() * 100)]);
        }}
      >
        Update list
      </button>
    </div>
  );
};

export default memo(DefaultObjectProps);
