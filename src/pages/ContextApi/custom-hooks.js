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
    setQuery: useCallback(() => {
      setQuery({ queryBy: 'filters', filters });
    }, [filters, setQuery]),
    setFilter
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
