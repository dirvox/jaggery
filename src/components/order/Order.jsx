import React from 'react'
import Navbar from '../navbar/Navbar'
import OrderContent from './OrderContent'
import Footer from '../footer/Footer'
import LimitedOffer from '../home/LimitedOffer'
import LimitedTimeOrder from './LimitedTimeOrder'

export const Order = ({slug}) => {
  return (
    <div>
        <Navbar/>
       <LimitedTimeOrder/>
        <OrderContent product={slug}/>
        <Footer/>
        
        
    </div>
  )
}
