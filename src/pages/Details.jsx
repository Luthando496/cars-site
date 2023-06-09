import React,{useEffect} from 'react'
import {Avatar} from '@mui/material'
import Carousel from "react-multi-carousel";
import { FaStar } from 'react-icons/fa';
import {Link,useParams} from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { getDetails } from '../store/actions/carsActions';
import {USDollar} from '../utils'




const Details = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const {id} = useParams()

    const {car} = useSelector(state => state.cars)

    const dispatch = useDispatch()

      useEffect(()=>{
        dispatch(getDetails(id))

      },[])
      
  return (
    <>

        <Navbar  />

        <div className="w-[90%] mx-auto flex items-center mt-32 justify-between">
            <h2 className="text-3xl font-yellow-700 font-semibold">{car?.name}</h2>

            <h3 className="text-2xl text-emerald-700 font-bold">{USDollar.format(car?.price)}</h3>

        </div>
    
    
    <section className='flex px-8 flex-col gap-8 w-full lg:grid lg:grid-cols-3 mt-4 mb-24'>

        {/* left */}
        <div className='flex col-span-2 flex-col space-y-8'>
        {car && <Carousel responsive={responsive} className="w-full h-[70vh] rounded-2xl border shadow-xl shadow-stone-500">
        {car?.images?.map((image,index) => (
            <div key={index} className="w-full h-full relative">
                <img src={image.url} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            </div>
        ))}
        </Carousel>}

        <div className=" w-full border rounded-2xl py-8 px-6">
            <h2 className="text-2xl font-bold text-blue-800">Details</h2>

            <ul className="flex my-8 flex-col space-y-2">
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Type:</h3>
                    <h3 className="text-md font-light ">SUV</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Make:</h3>
                    <h3 className="text-md font-light ">{car?.make}</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Model:</h3>
                    <h3 className="text-md font-light ">{car?.model}</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Color:</h3>
                    <h3 className="text-md font-light ">black</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Drive Type:</h3>
                    <h3 className="text-md font-light ">All-Wheel Drive (AWD/4WD)</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Transmission:</h3>
                    <h3 className="text-md font-light ">Automatic</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Condition:</h3>
                    <h3 className="text-md font-light ">New</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Year:</h3>
                    <h3 className="text-md font-light ">{car?.year}</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Mileage:</h3>
                    <h3 className="text-md font-light ">{car?.mileage}(KM)</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Fuel Type:</h3>
                    <h3 className="text-md font-light ">Petrol</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Engine Size:</h3>
                    <h3 className="text-md font-light ">SUV</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Door:</h3>
                    <h3 className="text-md font-light ">4 Doors</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">Cylinder:</h3>
                    <h3 className="text-md font-light ">6</h3>
                </li>
                <li className="flex py-2 items-center justify-between border-b border-gray-500">
                    <h3 className="text-md font-semibold ">VIN:</h3>
                    <h3 className="text-md font-light ">ACB123789AB</h3>
                </li>
            </ul>

        </div>

        <div className="w-full border rounded-2xl py-8 px-6">
            <h2 className="text-2xl font-bold text-blue-800">Overview</h2>

            <p className="text-md my-5 leading-[1.8] font-light ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dignissimos reprehenderit commodi! Corrupti asperiores repellat sed debitis quam. Sit, mollitia nisi ea illo laboriosam ut, amet deleniti reiciendis, tenetur quae aspernatur voluptatum suscipit cupiditate velit.</p>

            <p className="text-md my-5 leading-[1.8] font-light ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dignissimos reprehenderit commodi! Corrupti asperiores repellat sed debitis quam.</p>
            <p className="text-md my-5 leading-[1.8] font-light ">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>

        {/* // FEATURES */}
        <div className="px-6 pt-8 w-full border rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-800">Features</h2>

            <div className="grid grid-cols-3 items-baseline  py-8 my-8 gap-20 border-b border-b-gray-300">
                <h3 className="col-span-1 text-xl text-blue-900">Convenience</h3>
                <ul className="flex space-y-3 flex-col col-span-2">
                    <li>
                        <p className="text-md font-light">Heated Steering Wheel</p>
                    </li>
                    <li>
                        <p className="text-md font-light">Navigation System </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Tyre Pressure Monitoring System </p>
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-3 items-baseline  py-8 my-8 gap-20 border-b border-b-gray-300">
                <h3 className="col-span-1 text-xl text-blue-900">Entertainment</h3>
                <ul className="flex space-y-3 flex-col col-span-2">
                    <li>
                        <p className="text-md font-light">Apple CarPlay/Android Auto</p>
                    </li>
                    <li>
                        <p className="text-md font-light">Bluetooth</p>
                    </li>
                    <li>
                        <p className="text-md font-light">HomeLink </p>
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-3 items-baseline  py-8 my-8 gap-20 border-b border-b-gray-300">
                <h3 className="col-span-1 text-xl text-blue-900">Safety</h3>
                <ul className="flex space-y-3 flex-col col-span-2">
                    <li>
                        <p className="text-md font-light">Anti-lock Braking System </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Backup Camera </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Blind Spot Monitor </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Brake Assist </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Stability Control </p>
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-3 items-baseline  py-8 my-8 gap-20 border-b border-b-gray-300">
                <h3 className="col-span-1 text-xl text-blue-900">Interior</h3>
                <ul className="flex space-y-3 flex-col col-span-2">
                    <li>
                        <p className="text-md font-light">Heated and Ventilated Front Seats </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Panoramic Moonroof </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Qi Wireless Charging </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Touchscreen Display </p>
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-3 items-baseline  my-8 gap-20">
                <h3 className="col-span-1 text-xl text-blue-900">Exterior</h3>
                <ul className="flex space-y-3 flex-col col-span-2">
                    <li>
                        <p className="text-md font-light">Rear Bumper High Gloss </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Rear Diffuser Body Colour </p>
                    </li>
                    <li>
                        <p className="text-md font-light">Windows - Electric Front </p>
                    </li>
                    
                </ul>
            </div>


        </div>


        {/* add a review */}
        <div className="px-6 pt-8 w-full border rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-800">Add a Review</h2>

            <div className="flex flex-col lg:grid gap-10 grid-cols-2">
                <div>
                <div className="flex my-8 items-center justify-between">
                    <h3 className="text-md font-semibold">Comfort</h3>
                    <div className="flex items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    </div>
                </div>
                <div className="flex my-8 items-center justify-between">
                    <h3 className="text-md font-semibold">Perfomance</h3>
                    <div className="flex items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    </div>
                </div>
                <div className="flex my-8 items-center justify-between">
                    <h3 className="text-md font-semibold">Exterior Styling</h3>
                    <div className="flex items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    </div>
                </div>
                </div>


                <div className="">
                <div className="flex my-8 items-center justify-between">
                    <h3 className="text-md font-semibold">Interior design</h3>
                    <div className="flex items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    </div>
                </div>
                <div className="flex my-8 items-center justify-between">
                    <h3 className="text-md font-semibold">Value for the money</h3>
                    <div className="flex items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    </div>
                </div>
                <div className="flex my-8 items-center justify-between">
                    <h3 className="text-md font-semibold">Reliability</h3>
                    <div className="flex items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    </div>
                </div>
                </div>
            </div>

            <div className="flex w-full flex-col my-8 lg:grid lg:grid-cols-2 gap-6 focus:outline-none  focus:border-pink-500 ">
                <input type="text" className="w-full p-6 rounded-2xl border" placeholder='Your Name' />
                <input type="text" className="w-full p-6 rounded-2xl border" placeholder='Your Name' />
            </div>
            <input type="text" className="w-full my-8 pt-6 px-8 pb-[10rem] border rounded-2xl  " placeholder='Message' />

            <button className="w-full text-center my-8 py-6 px-4 text-sm uppercase  text-white hover:bg-purple-800 duration-700 bg-indigo-500 rounded-2xl lg:w-[40%]">Submit Review</button>
        </div>

        </div>



        {/* right */}
        <div className="sticky top-0 right-0 rounded-2xl w-full space-y-5 flex flex-col col-span-1">
            <button className="bg-pink-600 hover:bg-rose-500 duration-700 text-xl text-center px-6 rounded-2xl text-white capitalize py-4">Make an offer price</button>
            <button className="text-white bg-teal-600 text-xl text-center px-6 rounded-2xl capitalize py-4">schedule text drive</button>

            <div className="border px-8 py-8 space-y-8 rounded-2xl w-full">
            <div className="flex gap-4">
            <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <div className="">
                <h2 className="font-bold text-2xl">Demo</h2>
                <p className="text-gray-700 text-xl font-md">(302) 555-6666 </p>
            </div>

            </div>

            <input type="text" className="px-12 text-gray-400 duration-300 focus:tracking-[4px] py-4 w-full border-2  focus:outline-none focus:border-orange-300" placeholder='Your Name' />
            <input type="text" className="px-12 text-gray-400 duration-300  focus:tracking-[4px] py-4 w-full border-2  focus:outline-none focus:border-orange-300" placeholder='Your Email' />
            <input type="text" className="px-12 text-gray-400 duration-300  focus:tracking-[4px] py-4 w-full border-2  focus:outline-none focus:border-orange-300" placeholder='Your Phone no' />
            <input type="text" className="px-6  pt-6 pb-[8rem] w-full border-2  focus:outline-none focus:border-orange-300" placeholder='Message' />

            <button className="text-white w-full  bg-orange-600 text-xl text-center px-6 rounded-2xl capitalize py-4">Send A Message</button>
            <button className="text-white w-full  bg-green-600 text-xl text-center px-6 rounded-2xl capitalize py-4">WhatsApp</button>
            <button className="text-white w-full  bg-yellow-600 text-xl text-center px-6 rounded-2xl capitalize py-4">Send Private Message</button>

            </div>

        </div>

    </section>
    </>
  )
}

export default Details