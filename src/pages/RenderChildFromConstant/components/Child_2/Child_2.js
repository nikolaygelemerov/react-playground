import React from 'react';

import { useMount } from '../../../../services';

const Child_2 = () => {
  console.log('Update Child_2');
  useMount(() => {
    console.log('Mount Child_2');
  });

  return <div>Child_2</div>;
};

export default Child_2;
