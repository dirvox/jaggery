"use client";

import React, { useState, useEffect } from "react";

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check localStorage if popup was already seen
    const popupSeen = localStorage.getItem("contactPopupSeen");
    if (!popupSeen) {
      // Show popup after 5 seconds
      const showTimer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(showTimer);
    }
  }, []);

  useEffect(() => {
    let hideTimer;
    if (showPopup) {
      // Auto close after 15 seconds
      hideTimer = setTimeout(() => {
        handleClose();
      }, 15000);
    }
    return () => clearTimeout(hideTimer);
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("contactPopupSeen", "true"); // Mark as seen
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone:", phone, "Message:", message);
    // Send data to backend here if needed
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Skip button */}
        <button
          onClick={handleClose}
          className="absolute bottom-2 left-4 text-sm text-gray-500 hover:text-gray-800"
        >
          Skip
        </button>

        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-4">
          Leave your phone and message, we'll contact you!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
            required
          />
          <textarea
            placeholder="What do you want to buy?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
            required
          />
          <button
            type="submit"
            className="bg-[#C19A6B] text-white px-4 py-2 rounded hover:bg-[#b38d5a] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
