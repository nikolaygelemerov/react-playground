import { memo, useState } from 'react';

import { Child } from './components';

const UseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({ vendor: 1 });

  return (
    <>
      <Child counter={counter} data={data} />
      <button
        onClick={() => {
          setCounter(prevCounter => prevCounter + 1);
        }}
      >
        Update Counter
      </button>
      <button
        onClick={() => {
          setData(prevData => ({ ...prevData, vendor: prevData.vendor + 1 }));
        }}
      >
        Update Data Vendor
      </button>
    </>
  );
};

export default memo(UseCallback);
