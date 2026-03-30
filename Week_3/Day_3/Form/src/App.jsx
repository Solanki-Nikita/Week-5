import { useState } from "react";
import "./App.css";

// This is a simple login form with validation using React.
export default function App() {

// Initial form values and state for form values and errors
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
// State to manage form values and errors
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Handle input change (controlled inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;
// Update form values based on input changes  
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

// Validate form values and set errors if any  
    const errors = validate(formValues);
    setFormErrors(errors);

// If no errors, log form values (or perform any action like API call)
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted Successfully:", formValues);

// optional: reset form
      setFormValues(initialValues);
    }
  };

// Validation logic for username, email, and password fields
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username.trim()) {
      errors.username = "Username is required!";
    }
// Validate email format using regex and check if it's empty and remove whitespace
    if (!values.email.trim()) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters!";
    }

    return errors;
  };

// Render the form with input fields and error messages
  return (
    <div className="container">
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
          <p className="error">{formErrors.username}</p>
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="error">{formErrors.email}</p>
        </div>

        {/* Password */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="error">{formErrors.password}</p>
        </div>

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}