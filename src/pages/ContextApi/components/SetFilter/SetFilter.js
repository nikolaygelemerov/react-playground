import { memo, useContext } from 'react';

import { FiltersContext } from '../../FiltersProvider/FiltersProvider';

const SetFilter = () => {
  const {
    actions: { setFilter }
  } = useContext(FiltersContext);

  return (
    <button
      type="button"
      onClick={() => {
        setFilter({ id: 'merchantName', value: 'Bob' });
      }}
    >
      Set Filter
    </button>
  );
};

export default memo(SetFilter);
