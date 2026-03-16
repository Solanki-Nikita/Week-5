import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

export default function UseContextExample() {
  // Access context value
   const theme = useContext(ThemeContext);

  /*
  useContext reads the nearest ThemeContext.Provider
  in the component tree.

  If no Provider exists,
  React returns the default value "light".
  */
  return (
    <div>
      <h2>useContext Example</h2>

  {/* Display theme value */}
  <p>Current Theme: {theme}</p>
    </div>
  )
}
