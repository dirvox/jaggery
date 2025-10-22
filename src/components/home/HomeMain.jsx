import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from './HeroSection'
import Footer from '../footer/Footer'
import AboutSection from './AboutSection'
import ProductsSection from './ProductsSection'
import SuccessRateSection from './SuccessRateSection'
import TestimonialsSection from './TestimonialsSection'
import FAQSection from './FAQSection'
import CTASection from './CTASection'
import BlogSection from './BlogSection'

const HomeMain = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
       
        <ProductsSection/>
         <AboutSection/>
         {/* <SuccessRateSection/> */}
         <TestimonialsSection/>
         <BlogSection/>
         <FAQSection/>
         <CTASection/>
        <Footer/>
    </div>
  )
}

export default HomeMain