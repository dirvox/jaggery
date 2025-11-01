"use client";
import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";

const LimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [bellActive, setBellActive] = useState(false);

  // Calculate remaining time until midnight
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // today midnight (12 AM)
    return Math.max(0, Math.floor((midnight - now) / 1000));
  };

  // Initialize timer
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Bell animation every 2 seconds
  useEffect(() => {
    const bellTimer = setInterval(() => {
      setBellActive(true);
      setTimeout(() => setBellActive(false), 800);
    }, 2000);
    return () => clearInterval(bellTimer);
  }, []);

  // Convert seconds → HH:MM:SS
  const formatTime = (secs) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const sec = secs % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative py-16 px-4 sm:px-8  bg-[#C19A6B]  text-center overflow-hidden rounded-3xl shadow-2xl mt-10 mx-4 sm:mx-10">
      {/* Animated Glow Border */}

      {/* Bell Icon */}
      <div className="absolute top-6 left-6 sm:left-10 text-white">
        <Bell
          size={38}
          className={`${
            bellActive ? "animate-bell text-red-700" : "text-white"
          } transition-all duration-300`}
        />
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg mb-4 animate-pulse">
        ⚡ Limited Time Offer —{" "}
        <span className="text-green-700">30% OFF</span> ⚡
      </h2>

      <p className="text-gray/90 text-base sm:text-lg mb-6 font-medium tracking-wide">
        ⏰ Hurry! Offer ends <strong>today at midnight!</strong>  
        <br /> Don’t miss out — once time runs out, this deal is gone forever.
      </p>

      {/* Countdown Timer */}
      <div
        className={`flex justify-center gap-4 sm:gap-6 text-white mb-8 ${
          timeLeft < 600 ? "animate-shake text-red-400" : ""
        }`}
      >
        {["Hours", "Minutes", "Seconds"].map((label, i) => {
          const timeParts = formatTime(timeLeft).split(":");
          return (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 rounded-lg shadow-md border border-red-300/40"
            >
              <p className="text-2xl sm:text-3xl font-bold text-red-700">
                {timeParts[i]}
              </p>
              <p className="text-sm sm:text-base text-red-700 uppercase">{label}</p>
            </div>
          );
        })}
      </div>

      {/* Limited Stock Warning */}
      <p className="text-lg sm:text-xl font-semibold text-red-600 mb-4 animate-pulse">
        🚨 Only a few items left in stock — Order before it’s gone!
      </p>

      {/* Order Button */}
      <button onClick={() => {
            const section = document.getElementById("products");
            section?.scrollIntoView({ behavior: "smooth" });
          }} className="bg-yellow-400 text-[#1C1C1C] px-8 py-3 sm:px-10 sm:py-4 font-bold text-lg sm:text-xl rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg animate-bounce">
        🛒 Order Now
      </button>

      {/* Floating Sparks */}
      <div className="absolute -top-6 left-10 w-20 h-20 bg-yellow-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-float-slow"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes bell {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(-15deg);
          }
          75% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-bell {
          animation: bell 0.8s ease-in-out;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 10px #f87171, 0 0 20px #ef4444;
          }
          50% {
            box-shadow: 0 0 25px #f87171, 0 0 40px #ef4444;
          }
          100% {
            box-shadow: 0 0 10px #f87171, 0 0 20px #ef4444;
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-3px);
          }
          40% {
            transform: translateX(3px);
          }
          60% {
            transform: translateX(-2px);
          }
          80% {
            transform: translateX(2px);
          }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LimitedOffer;
