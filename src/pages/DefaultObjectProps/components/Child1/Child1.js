import React, { memo } from 'react';

import { GrandChild1 } from './components';

const Child1 = ({ counter, list = [] }) => {
  console.log('counter: ', counter);

  return (
    <div>
      <GrandChild1 list={list} />
    </div>
  );
};

export default memo(Child1);
