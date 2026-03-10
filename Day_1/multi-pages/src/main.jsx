// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
//import './Index.css';
// Import App component
import App from "./App";



// Find root element in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);