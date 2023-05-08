import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import { SearchCars, fetchCars } from '../store/actions/carsActions';
import {useDispatch,useSelector} from 'react-redux'



const Header = () => {
  const [show,setShow] = useState(false)
  const dispatch = useDispatch()
  const {cars} = useSelector(state => state.cars)

  const ChangeMake=(make)=>{

    dispatch(SearchCars(make))
  }

  
    

    useEffect(()=>{
      dispatch(fetchCars())

    },[dispatch])




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
                <li className="px-4 text-2xl">
                  <Link to="/login" className='text-white font-thin'>Sign In</Link>
                </li>
                <li className="px-4 text-2xl">
                  <Link to="/register" className='text-white font-thin'>Register</Link>
                </li>
            </ul>


            <button className='lg:hidden' onClick={()=> setShow(!show)}>
              <FaHamburger fill='blue' size={40} />
            </button>
            </div>
            </nav>

            


            <div className="absolute top-0 rounded-xl w-[500px] translate-y-[20%] left-[2rem] py-8  bg-amber-100/10">
              <div className="px-10 mx-auto">
                <h3 className="text-center text-md text-black font-semibold">Search Vehicles</h3>
                <form className="form mt-2">
                  <div className="form-controlling mt-4">
                  <h2 className="text-xl font-bold ">MAKE</h2>

                  <select name="" defaultValue={''} onChange={(e)=> ChangeMake(e.target.value)} id="" className='w-full py-4 px-4 border rounded-xl mt-4 bg-white'>
                    <option className='border-b border-b-gray-700' value="">Make</option>
                      <option  className='border-b border-b-gray-700' value='Aston Martin'>Aston Martin</option>
                      <option  className='border-b border-b-gray-700' value='Lamborghini'>Lamborghini</option>
                      <option  className='border-b border-b-gray-700' value='Ferrari'>Ferrari</option>
                  </select>
                  </div>
                  <div className="form-controlling mt-4">
                  <h2 className="text-xl font-bold ">Body Type</h2>
                  <select name="" id="" className='w-full py-4 px-4 border rounded-xl mt-4 bg-white'>
                  {cars?.map(car=>(
                    <option key={car.id}  className='border-b border-b-gray-700' value={car.model}>{car.model}</option>
                  ))}
                  </select>
                  </div>
                  <div className="form-controlling mt-8">
                  <h2 className="text-xl font-bold ">Price</h2>
                  <div className="inp mt-4 grid grid-cols-2 gap-4">
                    <input type="text" placeholder='price min' className='p-4 border rounded-xl focus:border-amber-400 focus:outline-none' />
                    <input type="text" placeholder='price max' className='p-4 border rounded-xl focus:border-amber-400 focus:outline-none' />
                  </div>
                  </div>
                    <div className="btn-container mt-4 w-full">

                  <button className="w-full text-white text-xl rounded-xl p-4 bg-sky-700">Search Cars</button>
                    </div>

                </form>

              </div>

            </div>
    </header>
        

    </>
  )
}

export default Header