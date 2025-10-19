"use client";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const fullText = "From Khatauli — The Heart of India’s Finest Gud/Jaggery";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      className="relative flex flex-col mt-10 justify-center items-center text-center min-h-screen px-4 md:px-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/60 to-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl bg-[#dfbb7d40] p-6 rounded-lg">
        {/* Typing Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-5 tracking-wide drop-shadow-md">
          {displayedText}
          <span className="border-r-4 border-[#C19A6B] ml-1 animate-pulse"></span>
        </h1>

        {/* Sub Text */}
        <p className="text-base md:text-lg text-black leading-relaxed animate-fadeIn">
          Experience <strong>Khatauli’s heritage</strong> with every bite.  
          Our Gud/Jaggery is crafted from the finest sugarcane, slow-boiled to preserve
          its natural minerals, sweetness, and aroma — the way our ancestors made it.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 font-medium text-black">
          <div>🌾 100% Natural</div>
          <div>🚜 Farm Sourced</div>
          <div>❌ No Chemicals</div>
          <div>💛 Made in Khatauli</div>
        </div>

        {/* Button */}
        <button
          className="mt-6 px-8 py-3 rounded-full font-semibold text-black bg-[#C19A6B] hover:bg-[#A97C50] transition duration-300 shadow-md"
        >
          Explore Our Products
        </button>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
