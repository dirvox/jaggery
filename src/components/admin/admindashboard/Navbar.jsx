"use client";
import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 shadow px-6 py-3">
      <div className="flex items-center space-x-3">
        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition">
          + New Item
        </button> */}
      </div>

      {/* <div className="hidden md:flex items-center border rounded-md px-3 py-2 w-80">
        <Search className="text-gray-500 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search content..."
          className="outline-none w-full text-gray-600"
        />
      </div> */}

      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="Admin"
          className="rounded-full w-9 h-9"
        />
        <p className="font-medium text-white hidden md:block">
          Admin User
        </p>
      </div>
    </header>
  );
};

export default Navbar;
