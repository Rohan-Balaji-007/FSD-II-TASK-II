import React, { useState } from 'react';

function CounterButtonFunc() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter using useState</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default CounterButtonFunc;