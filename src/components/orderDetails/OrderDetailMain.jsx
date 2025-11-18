import React from 'react'
import OrderData from './OrderData'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const OrderDetailMain = ( {slug}) => {
  return (
    <div>
        <Navbar/>
        <OrderData  data={slug}/>
        <Footer/>
    </div>
  )
}

export default OrderDetailMain