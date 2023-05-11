import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../store/actions/carsActions'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';





const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)

  useEffect(()=>{
    if(user){
      navigate('/')
    }

  },[user])



  const [email,setEmail] = useState('')


  const [password,setPassword] = useState('') 
  // const auth = getAuth();

  const Submit =(e)=> {
    e.preventDefault()
    dispatch(login(email,password))
      toast.success('Login Successful')

    
  }




  return (
      <>
      <Navbar />
      <div className="w-full cars-back h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="p-8 w-[500px] bg-white  rounded-2xl">
            <h2 className="text-2xl font-semibold text-sky-600 text-center">Sign In</h2>

            <form  onSubmit={Submit}  className="flex flex-col mt-10 space-y-8">
              <div className="flex flex-col space-y-4">
                <label className="block text-xl font-medium text-sky-600">Email</label>
                <input type="email" required   onChange={e => setEmail(e.target.value)} name="email" value={email} id="email" className="shadow appearance-none border w-full py-4 px-6 text-sky-600 rounded-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-4">
                <label  className="block text-xl font-medium text-sky-600">Full Name</label>
                <input value={password} minLength={7} name='password'  onChange={e => setPassword(e.target.value)}  type="text"  className="shadow appearance-none border w-full py-4 px-6 text-sky-600 rounded-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Full name" />
              </div>
              <button className="text-xl uppercase rounded text-white tracking-[2px] w-full bg-sky-500 hover:bg-blue-500 duration-700 font-semibold py-6 px-8 text-center">Register</button>
              {/* <button className="text-xl hover:translate-y-2 shadow-2xl hover:shadow uppercase rounded text-white tracking-[2px] w-full bg-black hover:bg-black/80 duration-700 font-semibold py-6 px-8 text-center">GOOGLE Sign In</button> */}
            </form>
          </div>
        </div>
      </div>
      
      </>
  )
}

export default SignIn