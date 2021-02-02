import React, { createContext, useCallback, useState } from 'react';

const initialState = {
  randomState: {}
};

export const RandomContext = createContext();

export const RandomContextProvider = ({ children }) => {
  const [value, setValue] = useState(initialState);

  const randomValueSetter = useCallback(() => {
    setValue(prevState => ({ ...prevState, randomState: {} }));
  }, []);

  return (
    <RandomContext.Provider value={{ ...value, randomValueSetter }}>
      {children}
    </RandomContext.Provider>
  );
};
