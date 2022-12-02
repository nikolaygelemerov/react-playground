import { memo } from 'react';

import { useMount, useUnmount } from './index';

const CustomHooks = () => {
  useMount(() => {
    console.log('MOUNT');
  });

  useUnmount(async () => {
    console.log('UNMOUNT');
  });

  return <div>Custom Hooks</div>;
};

export default memo(CustomHooks);
