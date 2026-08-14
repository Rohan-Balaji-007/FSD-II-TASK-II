import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
