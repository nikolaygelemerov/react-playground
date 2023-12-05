import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Mount = () => {
  const navigate = useNavigate();

  console.log('mount');
  return (
    <div>
      Mount
      <button
        type="button"
        onClick={() => navigate('/Parent', { state: { test: 20 } })}
      >
        Navigate to Parent route
      </button>
    </div>
  );
};

export default memo(Mount);
