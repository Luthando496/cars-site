import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import { SearchCars, SignOut, fetchCars } from '../store/actions/carsActions';
import {useDispatch,useSelector} from 'react-redux'
import { auth } from '../firebase';
import {  signOut } from "firebase/auth";



const Header = () => {
  const [show,setShow] = useState(false)
  const dispatch = useDispatch()
  // const {cars} = useSelector(state => state.cars)
  const {user} = useSelector(state => state.auth)

  const logout=()=>{
    dispatch(SignOut())

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
  }


  // const ChangeMake=(make)=>{

  //   dispatch(SearchCars(make))
  // }

  
    

  //   useEffect(()=>{
  //     dispatch(fetchCars())

  //   },[dispatch])




  return (
    <>
    

    <header className="front-head w-full pt-2 pb-10 h-[120vh] relative">
    
        <nav className="absolute top-0 left-0 w-full">
        <div className="p-4 w-full flex items-center justify-between">
            <Link to="/" className='text-3xl text-white font-thin'>AutoVibe.com</Link>

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


            <button className='lg:hidden' onClick={()=> setShow(!show)}>
              <FaHamburger fill='blue' size={40} />
            </button>
            </div>
            </nav>
    </header>
        

    </>
  )
}

export default Header