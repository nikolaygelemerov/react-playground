import { createContext } from 'react';

import * as actions from './actions';
import { useContextValue } from '../hooks';

const initialState = {
  actions: {},
  filters: {}
};

export const FiltersContext = createContext(initialState);

export const FiltersProvider = ({ children }) => {
  const { value } = useContextValue({ actions, state: initialState });

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
