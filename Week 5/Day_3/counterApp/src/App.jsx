
import React, { useState } from 'react'
import "./App.css";


export default function App() {
  // State Initialization 
  // count → stores current counter value
  // setCount → function to update count
 const [count, setCount] = useState(0);
 
 
  const handleClickInc =  () => {
      setCount(count + 1);
  }
  const handleClickDec =  () => {
      setCount(count - 1);
  }
  const handleClickRes = () => {
      setCount (0)
  }

  return (
    <div className="container">
      <div className="counter-card">
          <h2>Counter App </h2>
          <h1 className="count"> count : {count}</h1>
        <div className="buttons">
          <button className="btn increment" onClick={handleClickInc}>+</button>
          <br></br>
          <button className="btn decrement" onClick={handleClickDec}>-</button>
          <br></br>
          <button className="btn reset" onClick={handleClickRes}>Reset</button>
        </div> 
      </div>
    </div>
  )
}
