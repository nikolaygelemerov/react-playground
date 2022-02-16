import React, { memo, useCallback, useEffect, useState } from 'react';

const DepArray = props => {
  const [isActive, setIsActive] = useState(0);
  const [isActiveState, setIsActiveState] = useState(0);

  // const isActiveObj = useMemo(() => ({ isActive }), [isActive]);

  const updateIsActive = useCallback(() => {
    console.log('isActiveState callback: ', isActiveState);

    setIsActive(prevState => prevState + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const updateIsActiveState = useCallback(
    () => setIsActiveState(prevState => prevState + 1),
    []
  );

  useEffect(() => {
    console.log('isActive: ', isActive);
    console.log('isActiveState: ', isActiveState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <>
      <button type="button" onClick={updateIsActive}>
        Update isActive {isActive}
      </button>
      <br />
      <br />
      <button type="button" onClick={updateIsActiveState}>
        Update isActiveState {isActiveState}
      </button>
    </>
  );
};

export default memo(DepArray);
