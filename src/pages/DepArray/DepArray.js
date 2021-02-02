import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

const DepArray = props => {
  const [isActive, setIsActive] = useState(0);
  const [isActiveState, setIsActiveState] = useState(0);

  const isActiveObj = useMemo(() => ({ isActive }), [isActive]);

  const updateIsActive = useCallback(() => {
    console.log('isActiveState callback: ', isActiveState);

    setIsActive(prevState => prevState + 1);
  }, [isActive]);

  const updateIsActiveState = useCallback(
    () => setIsActiveState(prevState => prevState + 1),
    []
  );

  useEffect(() => {
    console.log('isActive: ', isActive);
    console.log('isActiveState: ', isActiveState);
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
