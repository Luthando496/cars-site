import React,{useState}from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'
import {useSelector} from 'react-redux'
import {  signOut } from "firebase/auth";
import { auth } from '../firebase';



const Navbar = () => {

  const [show, setShow] = useState(false)


  const {user} = useSelector(state => state.auth)



  const logout=()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
  }


  return (
    <nav className="py-6 px-4 md:px-16 w-full bg-black  flex items-center justify-between">
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
                {user ?
                  <li className="px-4 ">
                  <Link onClick={logout} to="/" className='text-white text-xl lg:text-2xl font-thin'>Logout</Link>
                </li> 
                :<li className="px-4 ">
                  <Link to="/login" className='text-white text-md lg:text-2xl font-thin'>Sign In</Link>
                </li>}
              </ul>

              <button className="lg:hidden" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu className="text-pink-500 text-5xl cursor-pointer " />
              </button>

              <div className={`${!show ? 'fixed lg:hidden top-0 z-50 border shadow-2xl translate-x-[700px]':'fixed lg:hidden top-0 z-50 border shadow-2xl translate-x-[0px]' } duration-500 fixed lg:hidden top-0 right-0 z-50 border shadow-2xl  bg-white w-[300px] h-screen`}>
                <div className="flex justify-end px-8 mt-5">
                <FaTimes onClick={()=> setShow(!show)} className="text-pink-500 text-6xl" />
                </div>
                <ul className="flex flex-col gap-3 mt-8">
                <li className="px-4 text-2xl text-center bg-teal-300 py-4">
                  <Link to="/" className=' text-white font-thin uppercase tracking-[4px]  text-4xl  w-full'>Home</Link>
                </li>
                <li className="text-2xl text-center bg-emerald-300 py-4">
                  <Link to="/listings" className='text-white font-thin tracking-[4px] uppercase'>Listings</Link>
                </li>
                <li className="text-2xl text-center bg-sky-300 py-4">
                  <Link to="/about" className='text-white font-thin tracking-[4px] uppercase'>About</Link>
                </li>
                <li className="text-2xl text-center bg-pink-300 py-4">
                  <Link to="/contact" className='text-white font-thin tracking-[4px] uppercase'>Contact</Link>
                </li>

                </ul>

              </div>
        </nav>
  )
}

export default Navbar