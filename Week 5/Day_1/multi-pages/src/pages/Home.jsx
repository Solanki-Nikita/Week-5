// Import React (not always required in Vite, but good practice)
import React from "react";

// Create Home component
function Home() {

  // JSX returned here will appear when user visits "/"
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website built with Vite + React.</p>
    </div>
  );
}

// Export the component so it can be used in App.jsx
export default Home;