import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contact from './forRoute/Contact'
import About from './forRoute/About'
import Home from './forRoute/Home'

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
           <li>
            <Link to='/about'>About</Link>
          </li>
           <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes> 
      </BrowserRouter>
    </div>
  )
}
