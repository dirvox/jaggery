
import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ContactData from './ContactData'

const ContactMain = () => {
  return (
   <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <div className="mt-3 mx-2">
            <ContactData/>
        </div>
      </div>
    </div>
  )
}

export default ContactMain