import React, { memo, useState } from 'react';

import { Child_1 } from './components';

const count = Math.floor(Math.random() * 1e2 + 1e6);

const generateList = () => {
  const newList = [];

  for (let i = 0; i < count; i++) {
    newList.push(Math.floor(Math.random() * 1e2 + 1e2));
  }

  return newList;
};

const MemoizationPerformance = () => {
  const [list, setList] = useState(generateList());

  return (
    <>
      <Child_1 {...list} />
      <button onClick={() => setList(generateList())} type="button">
        Click me
      </button>
    </>
  );
};

export default memo(MemoizationPerformance);
