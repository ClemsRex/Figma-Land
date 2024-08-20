import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Contents from '../components/Contents'
import Gallery from '../components/Gallery'
import Partner from '../components/Partner'
import Testimonials from '../components/Testimonials'
import Try from '../components/Try'


const Home = () => {
  return (
    <>
      <div className='m-0 p-0 box-border bg-[#181818] text-white overflow-hidden'>
        <Hero />\
        <Features />
        <Contents />
        <Gallery />
        <Partner />
        <Testimonials />
        <Try />
      </div>
    </>
  )
}

export default Home
