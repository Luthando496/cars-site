import { useState } from 'react'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import Listings from './pages/Listings';
import Home from './pages/Home';
import Details from './pages/Details';




function App() {


  return (
          <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/details" element={<Details />} />

            {/* <Route path="/contact" element={<Contact/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} /> */}

          </Routes>
          <Footer />

          
          </>
  )
}

export default App
