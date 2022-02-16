import React, { memo, useContext } from 'react';

import { useMount } from '../../../../services';

import { RandomContext } from '../../context';

const Child_1 = ({ children }) => {
  useMount(() => {
    console.log('Mount Child_1');
  });

  const { randomValueSetter } = useContext(RandomContext);

  console.log('Render Child_1');

  return (
    <div>
      Child_1{children}
      <button type="button" onClick={randomValueSetter}>
        RandomValueSetter
      </button>
    </div>
  );
};

export default memo(Child_1);
