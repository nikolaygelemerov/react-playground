import { memo } from 'react';

import { FiltersProvider, QueryProvider } from './providers';
import { MakeQuery, SetFilter } from './components';
import { QueryManager } from './renderless';

const ContextApi = () => {
  return (
    <QueryProvider>
      <QueryManager />
      <FiltersProvider>
        <MakeQuery />
        <SetFilter />
      </FiltersProvider>
    </QueryProvider>
  );
};

export default memo(ContextApi);
