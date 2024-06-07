import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement } from './redux/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>count : {count}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter
