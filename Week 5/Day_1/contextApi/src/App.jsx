import React from 'react'
import './App.css'
// Import the context
import { UserContext } from './UserContext';

// Import child component
import Profile from "./Profile";

function App() {

  // Global data we want to share
  const user = "Aditya";

  return (

   //Provider supplies data to all childer
   <UserContext.Provider value={user}>

    {/* Profile can access the user value */}
      <Profile />

   </UserContext.Provider>

  );
}

export default App
