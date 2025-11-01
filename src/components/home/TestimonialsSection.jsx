"use client";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Ramesh Kumar", text: "Best jaggery I have ever tasted! Pure, rich, and full of natural sweetness.", rating: 5 },
    { name: "Sita Verma", text: "Pure, healthy, and very tasty. Reminds me of homemade gud from childhood.", rating: 4.5 },
    { name: "Amit Sharma", text: "Highly recommend KhatauliGud products! Excellent quality and packaging.", rating: 5 },
    { name: "Priya Singh", text: "Good quality and authentic taste. A bit pricey but worth it.", rating: 4 },
    { name: "Vikram Patel", text: "Loved the taste and purity! Perfect with morning tea.", rating: 4.5 },
    { name: "Anjali Mehra", text: "Will buy again for sure. My family loved it!", rating: 5 },
    { name: "Rohit Yadav", text: "Nice product, delivery was fast and packaging was impressive.", rating: 4 },
    { name: "Neha Gupta", text: "Amazing taste and texture! Feels like real Khatauli jaggery.", rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#C19A6B] via-[#A97C50] to-[#7B4F26]  text-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-[url('/banner-modern.png')] bg-cover bg-center opacity-10 animate-slow-zoom"></div>

      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white drop-shadow-md uppercase tracking-wide">
        ❤️ What Our Customers Say ❤️
      </h2>

      {/* Testimonials Carousel */}
      <div className="relative flex justify-center items-center min-h-[280px] sm:min-h-[320px] md:min-h-[380px]">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center transition-all duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-[90%] sm:w-[70%] md:w-[60%] mx-auto text-gray-800">
              <p className="text-base sm:text-lg md:text-xl italic mb-5 leading-relaxed">
                “{t.text}”
              </p>
              <h4 className="font-semibold text-lg sm:text-xl text-[#7B4F26] mb-2">
                {t.name}
              </h4>
              <p className="text-yellow-500 text-lg">
                {Array.from({ length: Math.floor(t.rating) }, (_, i) => "⭐")}
                {t.rating % 1 !== 0 ? "⭐️" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {/* <div className="flex justify-center mt-10 space-x-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
          ></button>
        ))}
      </div> */}

      {/* Decorative animated background elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-200/20 rounded-full blur-3xl animate-float"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite alternate;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
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

export default TestimonialsSection;
