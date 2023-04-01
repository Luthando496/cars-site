import React from 'react'

const Footer = () => {
  return (
    <footer className="py-[7rem] bg-darkViolet">
            <div className="px-8 flex flex-col lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 space-y-8">
              <div className="w-full">
                <h2 className="text-white uppercase font-bold text-xl pb-5">Office</h2>
                <p className="text-sm text-gray-100 leading-loose font-semibold">South Africa<br />1234 Main Street,<br />New York, NY 10001</p>
              </div>
              {/*  */}
              <div className="text-white w-full">
                <h2 className=" uppercase font-bold text-xl pb-5">Contact</h2>
                <h1 className="text-3xl font-bold text">+27 76 705 7533</h1>
                <a className='font-light text-sm pt-6' href="mail">luthandodidiza197@gmail.com</a>
              </div>
              {/*  */}
              <div className="text-white w-full">
                <h2 className=" uppercase font-bold text-xl pb-5">Opening Hours</h2>
                <p className='font-light text-sm pt-4'>Monday – Friday: 09:00AM – 09:00PM</p>
                <p className='font-light text-sm pt-4'>Saturday: 09:00AM – 07:00PM</p>
                <p className='font-light text-sm pt-4'>Sunday: Closed </p>

              </div>
              {/*  */}
              <div className="text-white w-full">
                <h2 className=" uppercase font-bold text-xl pb-5">Keep In Touch</h2>
                <input type="text" placeholder='Subscribe' className="p-4 border placeholder:text-gray-400 bg-white focus:outline-none rounded-xl focus:border-pink-600" />
              </div>
              


            </div>

          </footer>
  )
}

export default Footer