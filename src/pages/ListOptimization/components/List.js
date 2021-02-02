import Item from './Item';

const arr = [];

for (let i = 0; i < 6500; i++) {
  arr.push(i);
}

const List = ({ type, updateYear }) => {
  return arr.map((el, index) => (
    <Item key={index} index={index} type={type} updateYear={updateYear} />
  ));
};

export default List;
