import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="py-6 px-4 md:px-16 w-full cars-back  flex items-center justify-between">
              <Link to="/" className='text-xl lg:text-3xl text-white font-thin'>AutoVibe.com</Link>

              <ul className="hidden lg:flex justify-between items-center">
                <li className="px-4 text-2xl">
                  <Link to="/" className='text-white font-thin'>Home</Link>
                </li>
                <li className="px-4 text-2xl">
                  <Link to="/listings" className='text-white font-thin'>Listings</Link>
                </li>
                <li className="px-4 text-2xl">
                  <Link to="/about" className='text-white font-thin'>About</Link>
                </li>
                <li className="px-4 text-2xl">
                  <Link to="/contact" className='text-white font-thin'>Contact</Link>
                </li>
              </ul>

              <ul className="flex justify-between items-center">
                <li className="px-4 ">
                  <Link to="/login" className='text-white text-md lg:text-2xl font-thin'>Sign In</Link>
                </li>
              </ul>
        </nav>
  )
}

export default Navbar