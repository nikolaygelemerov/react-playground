import { memo, useState } from 'react';

const PrevState = memo(() => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
      }}
      type="button"
    >
      {count}
    </button>
  );
});

export default PrevState;
