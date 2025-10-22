import React from "react";
import Navbar from "./Navbar";
import { Sidebar } from "lucide-react";

const Orders = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <div className="mt-3 mx-2">

        </div>
      </div>
    </div>
  );
};

export default Orders;
