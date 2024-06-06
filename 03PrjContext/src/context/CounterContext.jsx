// src/context/CounterContext.jsx
import React, { createContext, useReducer } from 'react';

const CounterContext = createContext();

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <CounterContext.Provider value={{ state, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
