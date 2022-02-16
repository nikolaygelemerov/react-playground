import React from 'react';

import { useMount } from '../../../../services';

const GrandChild_1 = () => {
  useMount(() => {
    console.log('Mount GrandChild_1');
  });

  console.log('Render GrandChild_1');

  return <div>GrandChild_1</div>;
};

export default GrandChild_1;
