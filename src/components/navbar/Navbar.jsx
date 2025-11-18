"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Products", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1C1C1C] px-6 md:px-12 py-3 shadow-md z-1000">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo3.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => {
              let href = item === "Contact" ? "/contact" : `#${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <a
                    href={href}
                    className="text-[#FAF8F5] font-medium hover:text-[#C19A6B] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Login / Signup Buttons */}
          {/* <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="bg-[#C19A6B] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#a88357] transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-[#C19A6B] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#a88357] transition"
            >
              Signup
            </a>
          </div> */}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#1C1C1C] mt-3 space-y-4 py-4 rounded-lg shadow-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#FAF8F5] font-medium hover:text-[#C19A6B] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Mobile Login / Signup */}
          {/* <li>
            <a
              href="/login"
              className="bg-[#C19A6B] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#a88357] transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="bg-[#C19A6B] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#a88357] transition"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </a>
          </li> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
