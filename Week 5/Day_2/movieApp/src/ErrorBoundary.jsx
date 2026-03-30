import React from "react";

/*
 ErrorBoundary is a class component
 because React error boundaries work with lifecycle methods
*/
class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    // state to track error
    this.state = { hasError: false };
  }

  /*
   Runs when an error occurs in child components
   Updates state so fallback UI is shown
  */
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /*
   Used for logging error details
  */
  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
  }

  render() {

    // fallback UI
    if (this.state.hasError) {
      return (
        <div style={{textAlign:"center", padding:"20px"}}>
          <h2>⚠ Something went wrong in Movie App</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    // render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;