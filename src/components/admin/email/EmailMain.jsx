
import React from 'react'
import Navbar from '../admindashboard/Navbar'
import Sidebar from '../admindashboard/Sidebar'
import EmailContent from './EmailContent'


const EmailMain = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <div className="mt-3 mx-2">
          <EmailContent/>
        </div>
      </div>
    </div>
  )
}

export default EmailMain