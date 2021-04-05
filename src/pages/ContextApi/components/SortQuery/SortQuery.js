import { memo } from 'react';

import { useQuerySort } from '../../custom-hooks';

const SortQuery = () => {
  const { setQuery } = useQuerySort();

  return (
    <button type="button" onClick={setQuery}>
      Sort
    </button>
  );
};

export default memo(SortQuery);
