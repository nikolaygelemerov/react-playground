import { memo } from 'react';

import { useQueryFilters } from '../../custom-hooks';

const MakeQuery = () => {
  const setQuery = useQueryFilters();

  console.log('RENDER MakeQuery');

  return (
    <button type="button" onClick={setQuery}>
      Make Query
    </button>
  );
};

export default memo(MakeQuery);
