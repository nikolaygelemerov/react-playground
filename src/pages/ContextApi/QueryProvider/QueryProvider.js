import { createContext } from 'react';

import * as actions from './actions';
import { useContextValue } from '../hooks';

export const initialState = {
  actions: {},
  requestQuery: null,
  queries: []
};

export const QueryContext = createContext(initialState);

export const QueryProvider = ({ children }) => {
  const { value } = useContextValue({ state: initialState, actions });

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};
