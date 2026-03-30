import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx' 
import Navbar from './Navbar.jsx'


// RouterExample component will be the main component which will have all the routes and the navbar
const RouterExample = () => {
  return (
    // BrowserRouter is the component which will wrap all the routes and the navbar
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* Route component is used to define the route and the element to be rendered when the route is matched */}
        {/* <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route>
        <Route path='/contact' element={<h1>Contact</h1>}></Route> */}
        
        {/*  We can also render the component instead of the element in the route */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<div>Login</div>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default RouterExample