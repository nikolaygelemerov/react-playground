import React, { memo } from 'react';

const GrandChild1 = ({ list }) => {
  console.log('list: ', list);
  return (
    <div>
      {list.map((el, index) => (
        <span key={index}>{el} </span>
      ))}
    </div>
  );
};

export default memo(GrandChild1);
