import React,{useState,useEffect} from 'react'
import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SearchCars, fetchCars } from '../store/actions/carsActions';
import {useDispatch,useSelector} from 'react-redux'
import {USDollar} from '../utils'



const Listings = () => {
  const dispatch = useDispatch()
  const {cars} = useSelector(state => state.cars)

  

  const ChangeMake=(make)=>{
    console.log(make)
    dispatch(SearchCars(make))
  }


  useEffect(()=>{
    dispatch(fetchCars())

  },[dispatch])


  return (
    <>
    <nav className="p-4 w-full bg-black flex items-center justify-between">
              <Link to="/" className='text-3xl text-white font-thin'>AutoVibe.com</Link>

              <ul className="hidden lg:flex justify-between items-center">
                <li className="px-4 text-2xl">
                  <Link to="/" className='text-white font-thin'>Home</Link>
                </li>
                <li className="px-4 text-2xl">
                  <Link to="/" className='text-white font-thin'>Blog</Link>
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
                  <Link to="/sign-in" className='text-white font-thin'>Sign In</Link>
                </li>
                <li className="px-4 text-2xl">
                  <Link to="/register" className='text-white font-thin'>Register</Link>
                </li>
              </ul>
    </nav>

    <section className="top-bar bg-black px-6 py-8">
            <form className="w-[90%] mx-auto flex flex-col space-y-4 sm:grid md:grid-cols-3 lg:grid-cols-4 gap-4 items-baseline">

            <select name="" id="" className='rounded-xl px-6 py-4 text-2xl bg-white font-light text-gray-800 w-full' >
                <option value="">Condition</option>
                <option value="bmw">New</option>
                <option value="benz">Used</option>

              </select>
              {/*  */}
              <select onChange={(e)=> ChangeMake(e.target.value)}  name="" id="" className='rounded-xl px-6 py-4 text-2xl font-light bg-white text-gray-800 w-full' >
                <option value="">Makes</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="benz">Toyota</option>
                <option value="benz">Opel</option>
              </select>
              {/*  */}
              <select name="" id="" className='rounded-xl px-6 py-4 text-2xl font-light bg-white text-gray-800 w-full' >
                <option value="">Select Types</option>
                <option value="new">Compact</option>
                <option value="used">Convertible</option>
                <option value="used">Coupe</option>
                <option value="used">Sedan</option>
                <option value="used">SUV</option>
              </select>

              <button className="px-6 w-full py-4 text-white bg-orange-600 rounded-xl text-2xl font-light hover:bg-rose-500 duration-700">Search Car</button>
              

            </form>

    </section>

    <section className="py-10 w-full">
            <h1 className="text-4xl font-bold text-sky-900 pl-5">Listings</h1>
            <div className="w-[95%] mx-auto flex justify-between items-center">
            <p className="my-16 pl-5">showing all {cars?.length} results</p>
              <select name="" id="" className='bg-sky-600 py-4 px-6 rounded-xl text-xl text-amber-900'>
                <option value="16">Sort By</option>
                <option value="1">Oldest</option>
                <option value="2">Newest</option>
                <option value="3">Lowest Price</option>
                <option value="4">Highest Price</option>

              </select>
            </div>

            <div className="my-[7rem] w-[95%] mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {cars?.map(car => (
            <Link to={`/details/${car.id}`}  key={car.id} className="card w-full border rounded-xl p-2 mr-10  ">
                <div className="card-img relative group overflow-hidden">
                  <img src={car.image} alt="bmw" className='w-full h-[300px] object-cover duration-700 hover:scale-[1.7] rounded-xl' />

                  <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
                  {car?.featured && <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>}
                </div>
                <div className="card-content  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold"> {USDollar.format(car.price)}</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">{car.name}</p>
                  <div className="flex gap-1  items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <span className="text-sm ml-2 text-gray-600 font-semibold">(1 Review)</span>
                  </div>
                  <div className="w-full h-[1px] my-2 bg-pink-200"></div>
                </div>
                <div className="card-footer px-2 flex items-center">
                  <div className="card flex gap-1 items-center">

                  </div>

                </div>
            </Link>

            ))}
            {/*  */}
            
            {/*  */}

            </div>
    </section>
    </>
  )
}

export default Listings