import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from './HeroSection'
import Footer from '../footer/Footer'
import AboutSection from './AboutSection'
import ProductsSection from './ProductsSection'

const HomeMain = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <ProductsSection/>
        <Footer/>
    </div>
  )
}

export default HomeMain