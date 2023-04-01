import React from 'react'
import Header from '../components/Header'
import {AiFillCar,AiOutlineCar} from 'react-icons/ai'
import Carousel from "react-multi-carousel";
import { motion } from 'framer-motion';
import {fadeIn} from '../varients'
import {FaStar} from 'react-icons/fa'


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <>
    <Header />
    <section className="w-full bg-white/50 shadow-2xl ">
            <div className="mx-auto w-[90%] flex flex-col lg:grid md:grid-cols-2 lg:grid-cols-5  gap-4 py-10 space-y-8 lg:space-y-0">
              <div className="card flex flex-col items-center justify-center">
                <AiFillCar size={30} />
                <h2 className="text-sky-800 font-bold pt-4 text-xl">Compact</h2>
              </div>
              <div className="card flex flex-col items-center justify-center">
                <AiOutlineCar size={30} />
                <h2 className="text-sky-800 font-bold pt-4 text-xl">Convertible</h2>
              </div>
              <div className="card flex flex-col items-center justify-center">
                <AiFillCar size={30} />
                <h2 className="text-sky-800 font-bold pt-4 text-xl">Coupe</h2>
              </div>
              <div className="card flex flex-col items-center justify-center">
                <AiFillCar size={30} />
                <h2 className="text-sky-800 font-bold pt-4 text-xl">SUV</h2>
              </div>
              <div className="card flex flex-col items-center justify-center">
                <AiOutlineCar size={30} />
                <h2 className="text-sky-800 font-bold pt-4 text-xl">Sedan</h2>
              </div>

            </div>


          </section>

          <section className="mt-24 w-full py-[5rem] bg-slate-200/10 ">

            <h1 className="text-center text-4xl font-bold text-sky-900">Featured Listings</h1>

            <Carousel responsive={responsive2} className="mt-14 w-[95%] mx-auto">

            <div className="card border border-white rounded-xl  mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-t-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content border  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
                  <div className="flex gap-1  items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <span className="text-sm ml-2 text-gray-600 font-semibold">(1 Review)</span>
                  </div>
                </div>
                <div className="card-footer px-2 flex items-center">
                  <div className="card flex gap-1 items-center">

                  </div>

                </div>
              </div>

              {/*  */}
              <div className="card border rounded-xl  mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-t-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content border  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
                  <div className="flex gap-1  items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <span className="text-sm ml-2 text-gray-600 font-semibold">(1 Review)</span>
                  </div>
                </div>
                <div className="card-footer px-2 flex items-center">
                  <div className="card flex gap-1 items-center">

                  </div>

                </div>
              </div>
              {/* // */}
              {/*  */}
              <div className="card border rounded-xl  mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-t-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content border  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
                  <div className="flex gap-1  items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <span className="text-sm ml-2 text-gray-600 font-semibold">(1 Review)</span>
                  </div>
                </div>
                <div className="card-footer px-2 flex items-center">
                  <div className="card flex gap-1 items-center">

                  </div>

                </div>
              </div>
              {/* // */}
              {/*  */}
              <div className="card border rounded-xl  mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-t-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content border  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
                  <div className="flex gap-1  items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <span className="text-sm ml-2 text-gray-600 font-semibold">(1 Review)</span>
                  </div>
                </div>
                <div className="card-footer px-2 flex items-center">
                  <div className="card flex gap-1 items-center">

                  </div>

                </div>
              </div>
              {/* // */}
              <div className="card border rounded-xl  mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-t-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content border  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
                  <div className="flex gap-1  items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <span className="text-sm ml-2 text-gray-600 font-semibold">(1 Review)</span>
                  </div>
                </div>
                <div className="card-footer px-2 flex items-center">
                  <div className="card flex gap-1 items-center">

                  </div>

                </div>
              </div>
              {/* // */}
              <div className="card border rounded-xl  mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-t-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content border  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
                  <div className="flex gap-1  items-center">
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <FaStar fill='gold' />
                    <span className="text-sm ml-2 text-gray-600 font-semibold">(1 Review)</span>
                  </div>
                </div>
                <div className="card-footer px-2 flex items-center">
                  <div className="card flex gap-1 items-center">

                  </div>

                </div>
              </div>
              {/* // */}

            </Carousel>

          </section>

          <section className="max-w-full mt-24">
            <div className="w-[95%] mx-auto">
            <h2 className="text-center text-3xl font-semibold">Why Choose Us</h2>

            <div className="flex flex-col lg:grid grid-cols-2 mt-10 gap-6">

              {/* text */}
              <motion.div variants={fadeIn('right',0.1)}  initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}}  className="grid grid-cols-2 py-16 gap-6">
                <div className="card">
                  <img src="http://demoapus1.com/voiture/wp-content/uploads/2021/12/f1.svg" alt="imf" />
                  <h2 className="text-xl font-semibold mt-4">Highly Secured</h2>
                  <p className="text-md font-light leading-[1.7] mt-4">Our stress-free finance <br /> department that can find<br /> financial solutions to save you<br /> money.</p>
                </div>

                <div className="card">
                  <img src="http://demoapus1.com/voiture/wp-content/uploads/2021/12/f2.svg" alt="imf" />
                  <h2 className="text-xl font-semibold mt-4">Trusted Agents</h2>
                  <p className="text-md font-light leading-[1.7] mt-4">Our stress-free finance <br /> department that can find<br /> financial solutions to save you<br /> money.</p>
                </div>

                <div className="card">
                  <img src="http://demoapus1.com/voiture/wp-content/uploads/2021/12/f3.svg" alt="imf" />
                  <h2 className="text-xl font-semibold mt-4">Get an Offer</h2>
                  <p className="text-md font-light leading-[1.7] mt-4">Our stress-free finance <br /> department that can find<br /> financial solutions to save you<br /> money.</p>
                </div>

                <div className="card">
                  <img src="http://demoapus1.com/voiture/wp-content/uploads/2021/12/f4.svg" alt="imf" />
                  <h2 className="text-xl font-semibold mt-4">Free Support</h2>
                  <p className="text-md font-light leading-[1.7] mt-4">Our stress-free finance <br /> department that can find<br /> financial solutions to save you<br /> money.</p>
                </div>
              </motion.div>

              

              {/* image */}
              <motion.div variants={fadeIn('up',0.1)}  initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}}className="image">
                <img src="https://images.pexels.com/photos/10520656/pexels-photo-10520656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img-container" className='h-full object-cover' />
              </motion.div>


            </div>

            </div>
          </section>

          <section className="stats mt-24 w-full">
            <div className="w-[90%] py-[10rem] space-y-10 md:space-y-0 mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="">
                <h2 className="text-center text-3xl font-bold text-amber-400"> 82.000 </h2>
                <p className="text-md text-white font-thin uppercase">cars for sale</p>
              </div>
              <div className="">
                <h2 className="text-center text-3xl font-bold text-amber-400"> 82.000 </h2>
                <p className="text-md text-white font-thin uppercase">DEALER REVIEWS</p>
              </div>
              <div className="">
                <h2 className="text-center text-3xl font-bold text-amber-400"> 82.000 </h2>
                <p className="text-md text-white font-thin uppercase">VISITORS PER DAY</p>
              </div>
              <div className="">
                <h2 className="text-center text-3xl font-bold text-amber-400"> 82.000 </h2>
                <p className="text-md text-white font-thin uppercase">VERIFIED DEALERS</p>
              </div>

            </div>
          </section>


          <section className="mt-24 py-[5rem] w-full">
            <h1 className="text-4xl text-center font-bold text-sky-900">Our Testimonials</h1>

            <div className="w-[75%] mx-auto mt-8 text-center flex flex-col items-center">
              <p className="text-xl tracking-[2px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id voluptates, saepe distinctio rem aliquam expedita nemo tenetur adipisci ea quaerat vel voluptatum nostrum ab magnam illum minus soluta molestias laudantium. Ullam exercitationem, dolorem officiis sapiente optio aspernatur!
              </p>

              <h2 className="font-bold text-2xl my-4">John Doe</h2>
              <p className="text-sm font-thin my-4">Marketing</p>

              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className='rounded-[50%] w-20 text-center' />

              
            </div>
          </section>

          <section className="mt-24 w-full py-[5rem] bg-slate-200/10 ">

            <h1 className="text-center text-3xl font-bold text-sky-900">Popular Listings</h1>

            <Carousel responsive={responsive} className="mt-8 w-[95%] mx-auto">

              <div className="card w-[300px] border rounded-xl p-2 mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
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
              </div>

              {/*  */}
              <div className="card w-[300px] border rounded-xl p-2 mr-10">
                <div className="card-img relative">
                  <img src="/assets/purple-bmw.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
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
              </div>
              {/* // */}
              {/*  */}
              <div className="card w-[300px] border rounded-xl p-2 mr-10">
                <div className="card-img relative">
                  <img src="/assets/Lambo.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-xl' />
                </div>
                <div className="card-content  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
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
              </div>
              {/* // */}
              {/*  */}
              <div className="card w-[300px] border rounded-xl p-2 mr-10">
                <div className="card-img relative">
                  <img src="/assets/audi-orange.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-xl' />
                </div>
                <div className="card-content  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
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
              </div>
              {/* // */}
              <div className="card w-[300px] border rounded-xl p-2 mr-10">
                <div className="card-img relative">
                  <img src="/assets/06f2865e8de49fd56e69839b17df7887.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-xl' />
                </div>
                <div className="card-content  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
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
              </div>
              {/* // */}
              <div className="card w-[300px] border rounded-xl p-2 mr-10">
                <div className="card-img relative">
                  <img src="/assets/6cc49d32fe3df3c960733f718c87813b.jpg" alt="bmw" className='w-full h-[200px] object-cover rounded-xl' />
                  <h3 className="text-sm text-white bg-blue-400 rounded-full absolute top-3 right-3 p-2">Featured</h3>
                </div>
                <div className="card-content  pl-2 mt-3">
                  <h2 className="text-sm  my-1 font-semibold">$1,250</h2>
                  <p className="text-sm my-1  text-rose-900 font-semibold">Mercedes Benz S65 AMG</p>
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
              </div>
              {/* // */}

            </Carousel>

          </section>


          <section className="my-[10rem]">
            <div className="w-[90%] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-4">

              <div className="flex items-center gap-5 rounded-xl bg-rose-400 py-8 px-4">
                <div className="">
                  <AiFillCar size={50} />
                </div>
                <div className="">
                <h1 className="text-4xl font-bold text-sky-900 my-4">Find Your Dream Car</h1>
                <p>Search your car in our Inventory and request a quote on the vehicle of your choosing. </p>
                </div>
              </div>
              {/*  */}

              <div className="flex items-center gap-5 rounded-xl bg-purple-400 py-8 px-4">
                <div className="">
                <h1 className="text-4xl font-bold text-sky-900 my-4">Submit Your Listing Easier</h1>
                <p className='text-right'>Request search your car in our Inventory and a quote on the vehicle of your choosing</p>
                </div>
                <div className="">
                  <AiFillCar size={50} />
                </div>
              </div>
            {/*  */}
            </div>

          </section>
        
    </>
  )
}

export default Home