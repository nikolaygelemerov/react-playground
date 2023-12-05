import { useState, memo } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount(count + 1);
          }, 300);
        }}
      >
        Add with timeout
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Add with batch
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default memo(Counter);
