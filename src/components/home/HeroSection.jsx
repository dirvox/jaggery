"use client";
import React, { useState, useEffect } from "react";
import ContactPopup from "../contact/ContactPopup";

const HeroSection = () => {
  const fullText = "From Khatauli — The Heart of India’s Finest Gud/Jaggery";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // ✅ Typewriter effect (runs once)
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      className="relative flex flex-col mt-10 justify-center items-center text-center min-h-[90vh] px-3 sm:px-6 md:px-10 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Contact Popup */}
      <ContactPopup />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/60 to-black/40 z-0"></div>

      {/* Content Box */}
      <div className="relative z-10 max-w-3xl bg-[#dfbb7d40] p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-sm border border-[#c9a86b]/50 w-full mx-auto">
        
        {/* Typewriter Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-5 tracking-wide drop-shadow-md leading-snug">
          {displayedText}
          <span className="border-r-4 border-[#C19A6B] ml-1 animate-pulse"></span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed fade-in px-2">
          Experience <strong>Khatauli’s heritage</strong> with every bite.  
          Our Gud/Jaggery is crafted from the finest sugarcane, slow-boiled to preserve
          its natural minerals, sweetness, and aroma — the way our ancestors made it.
        </p>

        {/* Scrolling Features (Infinite Loop) */}
        <div className="overflow-hidden mt-6">
          <div className="scrolling-text flex whitespace-nowrap font-medium text-black text-sm sm:text-base md:text-lg">
            <span className="mx-4 sm:mx-6">🌾 100% Natural</span>
    <span className="mx-4 sm:mx-6">🚜 Farm Sourced</span>
    <span className="mx-4 sm:mx-6">❌ Pure & Unrefined</span>
    <span className="mx-4 sm:mx-6">💛 Made in Khatauli</span>
    <span className="mx-4 sm:mx-6">🍯 Healthy & Wholesome</span>
    <span className="mx-4 sm:mx-6">🔥 Traditional Process</span>
    {/* <span className="mx-4 sm:mx-6">🌿 Chemical-Free Sweetness</span> */}
    <span className="mx-4 sm:mx-6">💪 Boosts Immunity</span>
    <span className="mx-4 sm:mx-6">🌸 Rich in Minerals</span>
    <span className="mx-4 sm:mx-6">☀️ Sun-Dried Perfection</span>
    <span className="mx-4 sm:mx-6">🍵 Perfect for Tea & Desserts</span>
    <span className="mx-4 sm:mx-6">🇮🇳 Taste of Rural India</span>
    <span className="mx-4 sm:mx-6">🌞 Energy That Lasts</span>
    <span className="mx-4 sm:mx-6">🌱 From Farm to Your Table</span>
    <span className="mx-4 sm:mx-6">✨ No Preservatives, Ever</span>

    {/* Duplicate for seamless infinite loop */}
    <span className="mx-4 sm:mx-6">🌾 100% Natural</span>
    <span className="mx-4 sm:mx-6">🚜 Farm Sourced</span>
    <span className="mx-4 sm:mx-6">❌ Pure & Unrefined</span>
    <span className="mx-4 sm:mx-6">💛 Made in Khatauli</span>
    <span className="mx-4 sm:mx-6">🍯 Healthy & Wholesome</span>
    <span className="mx-4 sm:mx-6">🔥 Traditional Process</span>
    {/* <span className="mx-4 sm:mx-6">🌿 Chemical-Free Sweetness</span> */}
    <span className="mx-4 sm:mx-6">💪 Boosts Immunity</span>
    <span className="mx-4 sm:mx-6">🌸 Rich in Minerals</span>
    <span className="mx-4 sm:mx-6">☀️ Sun-Dried Perfection</span>
    <span className="mx-4 sm:mx-6">🍵 Perfect for Tea & Desserts</span>
    <span className="mx-4 sm:mx-6">🇮🇳 Taste of Rural India</span>
    <span className="mx-4 sm:mx-6">🌞 Energy That Lasts</span>
    <span className="mx-4 sm:mx-6">🌱 From Farm to Your Table</span>
    <span className="mx-4 sm:mx-6">✨ No Preservatives, Ever</span>
          </div>
        </div>

        {/* Explore Button */}
        <button
          onClick={() => {
            const section = document.getElementById("products");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-black bg-[#C19A6B] hover:bg-[#A97C50] transition duration-300 shadow-md text-sm sm:text-base"
        >
          Explore Our Products
        </button>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-text {
            display: inline-flex;
            animation: scroll 35s linear infinite;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 1.5s ease-in-out;
          }

          /* Pause scroll on hover */
          .scrolling-text:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
