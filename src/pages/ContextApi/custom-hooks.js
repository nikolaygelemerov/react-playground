import { useCallback, useContext } from 'react';

import { FiltersContext, QueryContext } from './providers';

export const useQueryFilters = () => {
  const { filters } = useContext(FiltersContext);

  const {
    actions: { setQuery }
  } = useContext(QueryContext);

  return useCallback(() => {
    setQuery({ queryBy: 'filters', filters });
  }, [filters, setQuery]);
};
