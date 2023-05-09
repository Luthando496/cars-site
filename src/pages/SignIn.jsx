import React from 'react'
import Navbar from '../components/Navbar'

const SignIn = () => {
  return (
      <>
      <Navbar />
      <div className="w-full cars-back h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="p-8 w-[500px] bg-white  rounded-2xl">
            <h2 className="text-2xl font-semibold text-sky-600 text-center">Sign In</h2>

            <form  className="flex flex-col mt-10 space-y-8">
              <div className="flex flex-col space-y-4">
                <label htmlFor="email" className="block text-xl font-medium text-sky-600">Email</label>
                <input type="email" name="email" id="email" className="shadow appearance-none border w-full py-4 px-6 text-sky-600 rounded-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-4">
                <label htmlFor="email" className="block text-xl font-medium text-sky-600">Full Name</label>
                <input type="text"  className="shadow appearance-none border w-full py-4 px-6 text-sky-600 rounded-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Full name" />
              </div>
              <button className="text-xl uppercase rounded text-white tracking-[2px] w-full bg-sky-500 hover:bg-blue-500 duration-700 font-semibold py-6 px-8 text-center">Register</button>
            </form>
          </div>
        </div>
      </div>
      
      </>
  )
}

export default SignIn