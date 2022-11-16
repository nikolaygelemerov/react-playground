import { useCallback, useContext } from 'react';

import { FiltersContext, QueryContext } from './providers';

export const useQueryFilters = () => {
  const {
    actions: { setFilter },
    filters
  } = useContext(FiltersContext);

  const {
    actions: { setQuery }
  } = useContext(QueryContext);

  return {
    setFilter,
    setQuery: useCallback(() => {
      setQuery({ filters, queryBy: 'filters' });
    }, [filters, setQuery])
  };
};

export const useQuerySort = () => {
  const {
    actions: { setQuery }
  } = useContext(QueryContext);

  return {
    setQuery: useCallback(() => {
      setQuery({ queryBy: 'sort' });
    }, [setQuery])
  };
};
