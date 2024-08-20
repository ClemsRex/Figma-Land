import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Contents from './components/Contents'
import Gallery from './components/Gallery'
import Partner from './components/Partner'
import Testimonials from './components/Testimonials'
import Try from './components/Try'
import Footer from './components/Footer'
import React from 'react'

const App = () => {


  return (
    <>
      <div className='m-0 p-0 box-border bg-[#181818] text-white overflow-hidden'>
        <Navbar />
        <Hero />\
        <Features />
        <Contents />
        <Gallery />
        <Partner />
        <Testimonials />
        <Try />
        <Footer />
      </div>
    </>
  )
}

export default App
