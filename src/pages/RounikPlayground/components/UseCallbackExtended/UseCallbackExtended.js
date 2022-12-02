import { memo } from 'react';

import { useCallbackExtended } from '@rounik/react-custom-hooks';

export const UseCallbackExtended = memo(() => {
  const callback = useCallbackExtended(() => {}, []);

  return (
    <div>
      <button type="button">Update</button>
    </div>
  );
});
