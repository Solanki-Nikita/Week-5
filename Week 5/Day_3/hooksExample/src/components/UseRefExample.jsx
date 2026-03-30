import React, { useRef } from 'react'
// useRef is a React hook used to reference DOM elements
// or store mutable values that do not trigger re-render

export default function UseRefExample() {

// create a reference object
 const inputRef = useRef();
 /*
  inputRef = {
     current: undefined
  } 
  After React renders the input field,
  inputRef.current will point to the actual DOM element
  */

  const focusInput = () => {
    inputRef.current.focus();

    /*
    current → gives access to the DOM node

    focus() → built-in JavaScript DOM method
    that places the cursor inside the input field
    */
  }
  return (
    <div>
      <h2>UseRef Example</h2>
    {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text"/>
    {/* When button is clicked, focusInput() runs */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
