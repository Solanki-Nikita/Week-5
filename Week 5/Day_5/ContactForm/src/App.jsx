import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
// Error State
// Stores validation messages
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  //Validation Formate
  const validate = () =>{
    let newErrors = {};

    if(!formData.name.trim()){
      newErrors.name = "Name is requird";
    }
    else if (formData.name.length < 3 ){
      newErrors.name = "Name must be at least 3 charavters";
    }

    if(!formData.email.trim()) {
      newErrors.email = "Email is required";
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if(!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    setErrors(validationErrors);
    //   If no errors → submit form
    
    if(Object.keys(validationErrors).length === 0){
    alert('Thank you for your message! We will get back to you soon.')
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  }
  };
  
  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
            {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            rows="5"
          />
           {errors.message && <p className="error">{errors.message}</p>}
 
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  )
}
