import { memo } from 'react';

import { FiltersProvider, QueryProvider } from './providers';
import { FilterQuery, SortQuery } from './components';
import { QueryManager } from './renderless';

const ContextApi = () => {
  return (
    <QueryProvider>
      <QueryManager />
      <FiltersProvider>
        <FilterQuery />
        <SortQuery />
      </FiltersProvider>
    </QueryProvider>
  );
};

export default memo(ContextApi);
