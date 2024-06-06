// src/components/CounterApp.jsx
import React from 'react';
import CounterDisplay from './CounterDisplay.jsx';
import CounterControls from './CounterControls.jsx';

const CounterApp = () => {
  return (
    <div>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
};

export default CounterApp;
