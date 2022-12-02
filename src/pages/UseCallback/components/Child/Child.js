import { memo, useCallback, useEffect, useMemo, useState } from 'react';

const Child = ({ counter, data }) => {
  const [localData, setLocalData] = useState({ localVendor: 1 });
  const [text, setText] = useState('');

  const testCallback = useCallback(() => {
    console.log('TEST counter: ', counter);
    console.log('TEST data: ', data);
    console.log('TEST localData: ', localData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const onChange = useCallback(
    e => {
      // console.log('useCallback: ', text + e.target.value);
      setText(text + e.target.value);
    },
    [text]
  );

  useEffect(() => {
    console.log('useEffect text: ', text);
  }, [text]);

  useMemo(() => {
    console.log('useMemo text: ', text);
  }, [text]);

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
      <input onChange={onChange} value={text} />
    </>
  );
};

export default memo(Child);
