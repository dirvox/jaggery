"use client"
import axios from "axios";
import React, { useState } from "react";
import baseUrl from "../server/baseurl";

export default function SignupPage() {


  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
  try {
    if (phone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    const response = await axios.post(`${baseUrl}/items/send-otp`, {
      phone,
    });

    if (response.data.status) {
      setOtpSent(true);
      alert("OTP sent successfully!");
    } else {
      alert(response.data.message || "Failed to send OTP");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong while sending OTP");
  }
};
 


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C1C] p-4">
      <div className="w-full max-w-md bg-[#FAF8F5] rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-[#1C1C1C]">Create Account</h1>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <div className="flex gap-2">
              <input
                type="tel"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={handleSendOtp}
                className="px-4 py-2 bg-[#C19A6B] text-white rounded-lg font-semibold hover:bg-[#a88357] transition"
              >
                Send OTP
              </button>
            </div>
          </div>

          {/* OTP */}
          {otpSent && (
            <div>
              <label className="block mb-1 font-semibold">Enter OTP</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                placeholder="Enter OTP"
                required
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
              placeholder="Confirm password"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#1C1C1C] text-white rounded-lg font-semibold text-lg hover:bg-[#333] transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-[#C19A6B] font-semibold hover:underline">
              Login
            </a>
          </p>
          <p className="text-sm text-gray-600">
            <a href="/forgot-password" className="text-[#C19A6B] font-semibold hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
