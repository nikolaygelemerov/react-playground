import { memo } from 'react';

import { UseCallbackExtended } from './components/index';

const RounikPlayground = () => {
  return (
    <section>
      <div>
        <h2>useCallbackExtended</h2>
        <UseCallbackExtended />
      </div>
    </section>
  );
};

export default memo(RounikPlayground);
