import React, { memo } from 'react';

const Mount = () => {
  console.log('mount');
  return <div>Mount</div>;
};

export default memo(Mount);
