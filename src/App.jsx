import { useState } from 'react'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import Listings from './pages/Listings';
import Home from './pages/Home';
import Details from './pages/Details';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import About from './pages/About';



function App() {


  return (
          <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<SignIn  />} />
            <Route path="/about" element={<About  />} />
          <Route path="/register" element={<Register/>} /> 

            

          </Routes>
          <Footer />

          
          </>
  )
}

export default App
