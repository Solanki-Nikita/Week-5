import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement, reset  } from '../store/counterReducer'

export default function Counter() {
    // useSelector → read state from store
    const count = useSelector((state) => state.counter.value);
  
    //useDispatch ->send actions
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Redux Counter</h2>
        {/* display state */}
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>

      
    </div>
  );
}
