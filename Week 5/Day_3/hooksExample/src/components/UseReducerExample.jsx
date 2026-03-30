import React from 'react'
import { useReducer } from 'react'
// Import the useReducer hook from React.
// useReducer is used to manage complex state logic.

// Initial state of the component(The state object starts with count = 0)
const initialState = {count : 0};

function reducer (state, action) {
// Reducer decides how state should change
// based on the action.type

switch (action.type){
    case "increment":
        return{ count: state.count + 1};
    
    case "decrement":
        return{ count : state.count - 1};
    
    case "reset":
        //return{ count: 0};
        return {initialState};

    default:
        return state;
}
} 

// Alternative of Switch Case 
//Object Mapping
//IF-Else




function UseReducerExample() {
const[state, dispatch] = useReducer(reducer, initialState);
  /*
  state   → current state object
  dispatch → function used to send actions to reducer
  reducer → function that handles state updates
  initialState → starting value of state
  */
  return (
    <div>
      <div>
        <h2>Reducer Example</h2>
        {/* Display current count */}
        <h3>{state.count}</h3>

        <button onClick={() => dispatch({ type: "increment" })}>+</button>

        <button onClick={() => dispatch({ type: "decrement" })}>-</button>

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

       
      </div>
    </div>
  )
}
export default UseReducerExample;