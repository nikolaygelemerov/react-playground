import { createContext } from 'react';

import * as actions from './actions';
import { useContextValue } from '../hooks';

const initialState = {
  actions: {},
  queries: [],
  requestQuery: null
};

export const QueryContext = createContext(initialState);

export const QueryProvider = ({ children }) => {
  const { value } = useContextValue({ actions, state: initialState });

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};
