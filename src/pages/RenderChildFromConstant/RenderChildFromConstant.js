import React, { memo, useState } from 'react';

import { Child_1, Child_2 } from './components';

const RenderChildFromConstant = () => {
  const [, setUpdate] = useState({});

  const child1 = () => {
    return <Child_1 />;
  };

  return (
    <div>
      {child1()}
      <Child_2 />
      <button
        type="button"
        onClick={() => {
          setUpdate({});
        }}
      >
        Update
      </button>
    </div>
  );
};

export default memo(RenderChildFromConstant);
