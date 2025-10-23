"use client";
import React, { useState } from "react";
import baseUrl from "../server/baseurl";
import toast from "react-hot-toast";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/items/contact`, formData);

      const data =  response.data;
      console.log("data is ", data)

      if (data.success) {
        setShowModal(true);
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#FAF8F5] rounded-lg shadow-md mt-30 my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#C19A6B] text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center  bg-opacity-80 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              🎉 Message Sent Successfully!
            </h3>
            <p className="mb-4 text-gray-600">
              Thank you for reaching out. We’ll get back to you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#C19A6B] text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
