import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter using ReactJs</h1>
      <p style={{ fontSize: '2em' }}>{count}</p>
      <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px', padding: '10px' }}>Reset</button>
    </div>
  );
};

export default Counter;
