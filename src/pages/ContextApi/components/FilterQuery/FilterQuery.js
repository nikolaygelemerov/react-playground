import { memo } from 'react';

import { useQueryFilters } from '../../custom-hooks';

const FilterQuery = () => {
  const { setFilter, setQuery } = useQueryFilters();

  return (
    <>
      <div>
        <label htmlFor="merchantName">Merchant Name</label>
        <br />
        <input
          type="text"
          id="merchantName"
          onChange={e => {
            setFilter({ id: 'merchantName', value: e.target.value });
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="transactionId">Transaction ID</label>
        <br />
        <input
          type="text"
          id="transactionId"
          onChange={e => {
            setFilter({ id: 'transactionId', value: e.target.value });
          }}
        />
      </div>
      <br />
      <button type="button" onClick={setQuery}>
        Filter
      </button>
    </>
  );
};

export default memo(FilterQuery);
