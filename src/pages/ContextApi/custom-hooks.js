import { useCallback, useContext } from 'react';

import { QueryContext } from './QueryProvider/QueryProvider';
import { FiltersContext } from './FiltersProvider/FiltersProvider';

export const useQueryFilters = () => {
  const { filters } = useContext(FiltersContext);

  const {
    actions: { setQuery }
  } = useContext(QueryContext);

  return useCallback(() => {
    setQuery({ queryBy: 'filters', filters });
  }, [filters, setQuery]);
};
