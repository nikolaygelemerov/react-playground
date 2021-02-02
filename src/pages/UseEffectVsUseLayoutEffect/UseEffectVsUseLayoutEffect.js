import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useState,
  useRef
} from 'react';

const UseEffectVsUseLayoutEffect = props => {
  const [displaytest, setDisplayTest] = useState(false);

  const el = useRef(null);

  useEffect(() => {
    console.log('useEffect 1: ', displaytest);

    return () => console.log('return useEffect 1: ', displaytest);
  });

  useEffect(() => {
    console.log('useEffect 2: ', displaytest);

    return () => console.log('return useEffect 2: ', displaytest);
  }, [displaytest]);

  console.log('render: ', displaytest);

  return (
    <div ref={el}>
      <button
        onClick={() => {
          setDisplayTest(prevState => !prevState);
        }}
      >
        Toggle Display Test
      </button>
      {displaytest ? <div>Test</div> : null}
    </div>
  );
};

export default memo(UseEffectVsUseLayoutEffect);
