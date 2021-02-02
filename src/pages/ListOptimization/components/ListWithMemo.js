import { memo } from 'react';

import Item from './Item';

const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(i);
}

const ListWithMemo = ({ type }) => {
  return arr.map((el, index) => <Item key={index} index={index} type={type} />);
};

export default memo(ListWithMemo);
