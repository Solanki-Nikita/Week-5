import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav> 
        {/*  Link component is used to create a link to the route defined in the RouterExample component */}
        <Link to="/">Logo</Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li> 
                <Link to="/login"><button>Login</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar