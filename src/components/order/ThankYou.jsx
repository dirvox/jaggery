"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ThankYou = () => {
  const router = useRouter();

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 px-4 py-10">
      {/* Success Animation */}
      <div className="relative">
        <CheckCircle className="w-24 h-24 text-green-500 animate-bounce drop-shadow-lg" />
        <div className="absolute inset-0 w-24 h-24 rounded-full animate-ping bg-green-300 opacity-30"></div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6 text-center">
        Thank You for Your Order!
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mt-3 max-w-md text-base md:text-lg">
        Your order has been successfully placed. We’ll contact you soon to
        confirm your delivery details.  
        Enjoy the pure taste of <span className="font-semibold text-amber-600">Khatauli Gud</span> 🍯
      </p>

      {/* Order Card */}
      {/* <div className="mt-8 bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md text-center border border-amber-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Order Confirmation
        </h3>
        <p className="text-gray-500 text-sm">
          A confirmation email or call will be made shortly.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
            <img
              src="/powder.jpeg"
              alt="Ordered Product"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold text-gray-800">
            Jaggery Powder – 2kg
          </p>
          <p className="text-amber-600 font-semibold">₹418 (10% OFF)</p>
        </div>
      </div> */}

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="mt-10 px-6 py-3 bg-amber-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-amber-600 active:scale-95 transition-all"
      >
        Back to Home
      </button>

      {/* Decorative footer text */}
      <p className="mt-6 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} Khatauli Gud | Made with ❤️ for purity
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default ThankYou;
