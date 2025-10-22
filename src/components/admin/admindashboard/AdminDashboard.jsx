import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const AdminDashboard = () => {
  return (
   <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
       <div className='mt-3 mx-2'>
         <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-500">Total Sales</p>
          <h2 className="text-2xl font-bold mt-2">2,456</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-500">Total Expenses</p>
          <h2 className="text-2xl font-bold mt-2">3,326</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-500">Total Visitors</p>
          <h2 className="text-2xl font-bold mt-2">5,325</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">1,326</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Form Title</h3>
        <p className="text-gray-500 mb-4">
          {/* Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim. */}
        </p>
        <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-2 rounded-md mb-4">
         This is The Admin Dashboard OF Khatauli gud
        </div>

        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Table Title</th>
              <th className="px-4 py-2 text-left">Table Title</th>
              <th className="px-4 py-2 text-left">Table Title</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">Row {i + 1}</td>
                  <td className="px-4 py-2">Data {i + 1}</td>
                  <td className="px-4 py-2">Details {i + 1}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                      Edit
                    </button>
                    <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
       </div>
      </div>
    </div>
  )
}

export default AdminDashboard