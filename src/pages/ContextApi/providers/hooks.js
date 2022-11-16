import { useMemo, useState } from 'react';

export const useContextValue = ({ actions, filters, state }) => {
  const [value, setValue] = useState(state);

  const newActions = useMemo(() => {
    return Object.keys(actions).reduce((accum, actionName) => {
      accum[actionName] = (...restParams) => {
        actions[actionName](...restParams, setValue, filters);
      };

      return accum;
    }, {});
  }, [actions, filters]);

  const newValue = useMemo(
    () => ({ ...value, actions: newActions }),
    [newActions, value]
  );

  return { value: newValue };
};
