import { useState,useEffect,lazy,Suspense } from 'react'
import Footer from './components/Footer'
import {Vortex} from 'react-loader-spinner'
import {Routes,Route} from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux'
const Listings = lazy(()=>import('./pages/Listings'));
const Home = lazy(()=>import('./pages/Home'));
const Details = lazy(()=>import('./pages/Details'));
const Contact = lazy(()=>import('./pages/Contact'));
const SignIn = lazy(()=>import('./pages/SignIn'));
const Register = lazy(()=>import('./pages/Register'));
const About = lazy(()=>import('./pages/About'));





function App() {

const {user} = useSelector(state => state.auth)
  

  return (
          <>
          <Suspense fallback={<div className='w-full mt-24 h-[60vh] flex justify-center items-center'><Vortex visible={true}
        height="400"
        width="400"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['black', 'pink', 'blue', 'yellow', 'orange', 'purple']}
        /></div>}>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<SignIn  />} />
            <Route path="/about" element={<About  />} />
          <Route path="/register" element={<Register/>} /> 

            

          </Routes>
        </Suspense>

          <Footer />

          
          </>
  )
}

export default App
