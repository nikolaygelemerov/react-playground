import React, { memo } from 'react';

const Child_1 = props => {
  console.time('list memoization');
  // const newList = useMemo(() => console.log(props), Object.values(props));
  console.timeEnd('list memoization');

  return <div>Memoization Performance</div>;
};

export default memo(Child_1);
