import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <Navbar />
    <div className="w-full text-center bg-white py-[3rem]">
        <h1 className="text-black font-thin tracking-[4px] uppercase text-2xl lg:text-4xl">About</h1>
        <div className="bg-pink-400 w-[5rem] h-[1px]   my-2 mx-auto"></div>
    </div>

    <div className="my-20 container mx-auto flex flex-col lg:gap-[8rem] lg:grid lg:grid-cols-2">
        {/* image */}
        <div className="w-full h-full">
            <img src="https://images.pexels.com/photos/11880928/pexels-photo-11880928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='w-full h-full object-cover' />
        </div>
        {/* text */}
        <div className="py-[10rem] flex flex-col space-y-10 mx-4">

            <h1 className="text-sky-800 font-bold text-4xl">Welcome To The Voiture</h1>

            <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur. </p>

            <p className="leading-[1.7] text-xl ">Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum zzril delenit. </p>

            <button className="text-2xl font-light bg-pink-700 md:w-[50%] text-white px-8 w-full lg:w-[50%] py-6">Learn More</button>

        </div>
    </div>


    <div className="my-10 container mx-auto">
        <h1 className="text-4xl font-semibold  capitalize text-blue-900 text-center">Why Choose Us</h1>

        <div className="mt-16 flex flex-col gap-10 lg:grid lg:grid-cols-3">
            {/* items */}
            <div className="card flex items-center gap-2">
                <div className="">
                  <img src="http://demoapus1.com/voiture/wp-content/uploads/2021/12/f1.svg" alt="imf" className='' />
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mt-4">Highly Secured</h2>
                  <p className="text-md font-light leading-[1.7] mt-4">Our stress-free finance <br /> department that can find<br /> financial solutions to save you<br /> money.</p>
                </div>
        </div>

        {/*  */}
        <div className="card flex items-center gap-2">
                <div className="">
                  <img src="http://demoapus1.com/voiture/wp-content/uploads/2021/12/f1.svg" alt="imf" className='' />
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mt-4">Highly Secured</h2>
                  <p className="text-md font-light leading-[1.7] mt-4">Our stress-free finance <br /> department that can find<br /> financial solutions to save you<br /> money.</p>
                </div>
        </div>
        {/*  */}
        <div className="card flex items-center gap-2">
                <div className="">
                  <img src="http://demoapus1.com/voiture/wp-content/uploads/2021/12/f1.svg" alt="imf" className='h-full' />
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mt-4">Highly Secured</h2>
                  <p className="text-md font-light leading-[1.7] mt-4">Our stress-free finance <br /> department that can find<br /> financial solutions to save you<br /> money.</p>
                </div>
        </div>

        </div>
    </div>


    <div className="my-[5rem] container mx-auto">
        <h1 className="text-4xl font-semibold  capitalize text-blue-900 text-center">Our Team</h1>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="w-full">
                <div className="img">
                    <img src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='w-full h-full object-cover' />
                </div>
            </div>
            {/*  */}
            <div className="w-full">
                <div className="img overflow-hidden">
                    <img src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='w-full h-full object-cover hover:scale-[1.9] duration-[3000ms]  ' />
                </div>
            </div>
            {/*  */}
            <div className="w-full">
                <div className="img overflow-hidden">
                    <img src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='w-full h-full object-cover duration-[900ms] hover:scale-150' />
                </div>
            </div>
            {/* //  */}
            <div className="w-full  group-hover">
                <div className="img group-hover overflow-hidden">
                    <img src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='w-full h-full object-cover duration-[900ms] hover:scale-150' />
                </div>
            </div>

        </div>
    </div>
        
    </>
  )
}

export default About