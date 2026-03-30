import React from 'react'
import { useState } from 'react';
import "./App.css";

export default function OfficialForm() {

  /*
  Form State
  Object used to store all form fields
  */
 const [formData, setFormData] = useState({
    name: "", email: "", phone: "", gender: "",city: "", message: ""
 });
 // Handle Input Change 
 // Update Form Dnamically

 const handleChange = (e) => {
    const { name, value} = e.target;    //This updates only one field without losing others.
    setFormData((prevDate) => ({                 //Using Spread Operator
        ...prevDate, [name] : value
    }));
};
//Hnadle Form Submit
//Prevents page refresh and logs form data
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data : ", formData);
    alert ("Form Submitted Successfully")
};
  return (
    <div className='form-container'>
        <h2>Ofiical Information Site</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label>
                <input type='text' name='name' value={formData.name}
                onChange={handleChange} placeholder="Enter Your Name"  required />

                <label>Email : </label>
                <input type='email' name='email' value={formData.email}
                onChange={handleChange} placeholder="Enter Your Email "  required />
                
                <label>Phone : </label>
                <input type='number' name='phone' value={formData.phone}
                onChange={handleChange} placeholder="Enter Your Number"  required />

                <label>Gender: </label>
                <input type='radio' name='gender' value="Male" onChange={handleChange} />Male
                <input type='radio' name='gender' value="Female" onChange={handleChange}/>Female
                <input type='radio' name='gender' value="Other" onChange={handleChange}/>Other

                <label>City : </label>
                <select name='city' value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    <option value="">Indore</option>
                    <option value="">Mumbai</option>
                    <option value="">Gujrat</option>
                    <option value="">Bhopal</option>
                    <option value="">Goa</option>

                </select>
                <div>
                    <label>About You : </label>
                    <textarea 
                    name='message' 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder='Enter Your Message'/>
                </div>
               <button type='submit'>Submit</button>
            </div>
        </form>

  {/* Display entered data dynamically which user field */}
    
        {/* <h2>Preview</h2>
        <p>{formData.name}</p>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <p>{formData.city}</p>
        <p>{formData.message}</p>
             */}
    </div>
  );
}
