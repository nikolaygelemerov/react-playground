import React, { memo, useState } from 'react';

import ChildOne from '../ChildOne/ChildOne';

const ChildTwo = ({ onChildOneUnmount }) => {
  console.log('here');
  return (
    <ChildOne onChildOneUnmount={onChildOneUnmount}>
      <div>Ala</div>
      {false ? <div></div> : null}
    </ChildOne>
  );
};

export default memo(ChildTwo);
