// src/components/CounterControls.jsx
import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext.jsx';

const CounterControls = () => {
  const { increment, decrement, reset } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterControls;
