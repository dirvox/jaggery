"use client";
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const LimitedTimeOrder = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [ring, setRing] = useState(false);

  // Calculate time remaining till midnight
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const diff = midnight - now;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { hours, minutes, seconds };
  };

  // Countdown effect
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Bell bounce after 2s
  useEffect(() => {
    const timeout = setTimeout(() => setRing(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative py-2 bg-white pt-25 text-center overflow-hidden  border-t-4 border-red-500">
      {/* Floating background decor */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-100 rounded-full blur-3xl opacity-40 animate-float"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Bell Icon */}
        <div className={`mb-4 ${ring ? "animate-bounce" : ""}`}>
          <Bell size={50} className="text-red-600 drop-shadow-md" />
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-2 text-red-600 animate-blink drop-shadow-lg">
          ⚡ Limited Time Offer ⚡
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-gray-800">
          Hurry up! <span className="text-red-600 font-bold">30% OFF</span> ends at midnight ⏰
        </p>

        {/* Countdown */}
        <div className="flex space-x-3 sm:space-x-5 text-center">
          {["Hours", "Minutes", "Seconds"].map((label, idx) => {
            const value =
              idx === 0
                ? timeLeft.hours
                : idx === 1
                ? timeLeft.minutes
                : timeLeft.seconds;
            return (
              <div
                key={label}
                className="bg-[#C19A6B] bg-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-xl border border-yellow-500 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl sm:text-4xl font-bold">
                  {value !== undefined
                    ? value.toString().padStart(2, "0")
                    : "00"}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-white">
                  {label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action */}
        {/* <button className="mt-8 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse">
          🛒 Order Now
        </button> */}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0.3;
          }
        }
        .animate-blink {
          animation: blink 1.2s infinite;
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
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LimitedTimeOrder;
