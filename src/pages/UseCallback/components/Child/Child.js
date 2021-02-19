import { memo, useCallback, useState } from 'react';

const Child = ({ counter, data }) => {
  const [localData, setLocalData] = useState({ localVendor: 1 });

  const testCallback = useCallback(() => {
    console.log('TEST counter: ', counter);
    console.log('TEST data: ', data);
    console.log('TEST localData: ', localData);
  }, [counter]);

  return (
    <>
      <button onClick={testCallback}>Test Callback</button>
      <button
        onClick={() => {
          setLocalData(prevLocalData => ({
            ...prevLocalData,
            localVendor: prevLocalData.localVendor + 1
          }));
        }}
      >
        Update New Object Local Data Vendor
      </button>
      <button
        onClick={() => {
          setLocalData(prevLocalData => {
            prevLocalData.localVendor += 1;

            return prevLocalData;
          });
        }}
      >
        Update Mutate Object Local Data Vendor
      </button>
    </>
  );
};

export default memo(Child);
