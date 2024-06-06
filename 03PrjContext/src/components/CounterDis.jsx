// src/components/CounterDisplay.jsx
import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext.jsx';

const CounterDisplay = () => {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter Value: {state.count}</h1>
    </div>
  );
};

export default CounterDisplay;
