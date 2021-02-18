import { memo, useState } from 'react';

import AwaitSetStateChild from './AwaitSetStateChild';

const AwaitSetState = () => {
  const [prop, setProp] = useState({ a: 0 });

  return (
    <>
      <AwaitSetStateChild prop={prop} />
      <button
        onClick={() => {
          setProp(prevProp => ({ ...prevProp, a: prevProp.a + 1 }));
        }}
      >
        Update Prop
      </button>
    </>
  );
};

export default memo(AwaitSetState);
