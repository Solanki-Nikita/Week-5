import React from 'react'
import UseReducerExample from './components/UseReducerExample';
import UseMemoExample from './components/UseMemoExample';
import UseRefExample from './components/UseRefExample';
import UseContextExample from './components/UseContextExample';
import { ThemeContext } from './context/ThemeContext';
import UseCallbackExample from './components/UseCallbackExample';

export default function App() {
  return (
    <div>
      {/* <UseReducerExample/> */}
      {/* <UseMemoExample/> */}
      {/* <UseRefExample/> */}
      {/* <UseContextExample/> */}
      {/* <ThemeContext.Provider value='Dark'> */}
        {/* <UseContextExample/> */}
      {/* </ThemeContext.Provider> */}
      <UseCallbackExample/>
    </div>
  )
}
