import React  from 'react'
import { useContext } from 'react';
// Import the context
import { UserContext } from './UserContext';

 function Profile() {

  // Access the context Value
  const user = useContext(UserContext);
  return (
    <div>
    {/* Display user name from context */}
    <h2>Welcome {user}</h2>
    </div>
  );
}
export default Profile;



// Data Flow

// App.jsx
//   │
//   │ value="Aditya"
//   ▼
// UserContext.Provider
//   │
//   ▼
// Profile.jsx
//   │
//   ▼
// useContext(UserContext)
//   │
//   ▼
// Displays "Welcome Aditya"