import React from 'react'
// Import routing tools from react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

//Import page Components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {

  return (
  // BrowserRouter enables routing in the React app
  <BrowserRouter>
   <div>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
      </nav>
     {/* Routes container holds all route definitions */}
      <Routes>

        {/* Route for Home page */}
        {/* When URL is "/" Home component will render */}
        <Route path="/" element={<Home/>} />
         
        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </div>
  </BrowserRouter>

   
  )
}
