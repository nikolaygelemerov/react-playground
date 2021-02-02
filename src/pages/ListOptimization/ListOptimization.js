import { useState } from 'react';

import List from './components/List';
import ListWithMemo from './components/ListWithMemo';

const ListOptimization = () => {
  const [update, setUpdate] = useState({});
  const [updateType, setUpdateType] = useState('audi');
  const [updateYear, setUpdateYear] = useState(39);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setUpdate({});
        }}
      >
        Update
      </button>
      <button
        type="button"
        onClick={() => {
          setUpdateType(prevState => (prevState === 'bmw' ? 'audi' : 'bmw'));
        }}
      >
        Toggle Car Type
      </button>
      <button
        type="button"
        onClick={() => {
          setUpdateYear(prevState => (prevState === 39 ? 29 : 39));
        }}
      >
        Toggle Year
      </button>
      <List type={updateType} updateYear={updateYear} />
    </>
  );
};

export default ListOptimization;
