import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'



const Contact = () => {
  return (
    <>
    <Navbar />


    <div className="cont h-[110vh]">
    <div className="wrapper w-[80%] mx-auto h-full flex justify-center items-center">

    <div className="text-center max-h-full space-y-6">
        <h1 className='text-[3rem] font-light text-zinc-300'>Contact Me</h1>
        <p className='text-xl font-extralight text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Unde veniam aperiam rerum quis atque, illum.</p>
      

    </div>

    </div>
    </div>

    <div className="py-40">
        <div className="w-[80%] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-28">
            {/*  */}
            <div className="leftie">
                <h1 className="text-2xl uppercase text-darkBlue3 font-light">Get in touch person</h1>
                <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur!</p>
                <div className="my-10">
                    <p className="text-xl font-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus cupiditate debitis qui fugiat perspiciatis culpa beatae saepe suscipit ut voluptas odio ipsam reiciendis quasi corrupti, vel rerum.
                    </p>
                </div>
                <div className="space-y-6">
                <h2 className="tex-xl font-light"><span className='font-bold uppercase py-2'>Address</span> 322 Moon St, Venice Italy, 1231</h2>
                <h2 className="tex-xl font-light"><span className='font-bold uppercase py-2'>Phone</span> (+27) 76 705 7533</h2>
                <h2 className="tex-xl font-light"><span className='font-bold uppercase py-2'>Email</span> luthandodidiza@gmail.com</h2>

                </div>
            </div>
            {/*  */}
            <div className="rightie space-y-6">
                <input type="text" name="" id="" className='p-4 w-full bg-black text-rose-700 placeholder:text-rose-700' placeholder='Name' />
                <input type="email" name="" id="" className='p-4 w-full bg-black text-rose-700 placeholder:text-rose-700' placeholder='Email' />
                <input type="text" name="" id="" className='p-4 w-full bg-black text-rose-700 placeholder:text-rose-700' placeholder='Subject' />
                <textarea name="" id="" placeholder='Message'  className='bg-black text-rose-700 placeholder:text-rose-700 p-4 h-[5rem] w-full'
                ></textarea>
                <button className='text-white hover:text-white bg-amber-400 w-[40%] hover:bg-amber-900 font-bold py-2 px-6 rounded'>Send Message</button>
            </div>

        </div>
    </div>
</>
  )
}

export default Contact