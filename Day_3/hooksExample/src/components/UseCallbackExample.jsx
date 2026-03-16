import React, { useCallback, useState } from 'react'

export default function UseCallbackExample() {

    //state for counter
    const [count, setCount] = useState(0);
    // another state to force re-render
    const [text, setText] = useState("");

  /*
  useCallback memoizes the function

  Without useCallback:
  React creates a new function on every render

  With useCallback:
  React reuses the same function reference
  unless dependencies change
  */

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [] ); // dependency array
  
  return (
    <div>
      <h2>Callback Example</h2>
      {/* display counter */}
      <h3>Count: {count}</h3>
      {/* child component receives function */}
      <child onclick={increment}/>
      <br/>
      <input 
      type='text'
      placeholder='Type here'
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}
