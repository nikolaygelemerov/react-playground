import React from 'react';

import { useMount } from '../../../../services';

const Child_1 = () => {
  console.log('Update Child_1');

  useMount(() => {
    console.log('Mount Child_1');
  });

  return <div>Child_1</div>;
};

export default Child_1;
