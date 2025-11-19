"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import baseUrl from "../server/baseurl";

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const popupSeen = localStorage.getItem("contactPopupSeen");

    if (!popupSeen) {
      const showTimer = setTimeout(() => setShowPopup(true), 4000);
      return () => clearTimeout(showTimer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("contactPopupSeen", "true");
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log("Phone:", phone, "Message:", message);

    const response = await axios.post(`${baseUrl}/api/items/`)

    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative animate-popup">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Contact Us
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Leave your details — we'll reach out to you shortly!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
            required
          />

          <textarea
            placeholder="What do you want to buy?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full min-h-[90px] focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
            required
          />

          <button
            type="submit"
            className="bg-[#C19A6B] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#b38d5a] transition-all"
          >
            Submit
          </button>
        </form>

        {/* Skip link */}
        <button
          onClick={handleClose}
          className="mt-3 text-sm text-gray-500 hover:text-gray-800 text-center w-full"
        >
          Skip
        </button>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        .animate-popup {
          animation: popIn 0.3s ease-out;
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPopup;
