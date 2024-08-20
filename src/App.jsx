import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/Product'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/product' element={ <Product/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/contact' element={ <Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
