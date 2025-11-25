"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ThreeDCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotate = useMotionValue(0);
  const smoothRotate = useSpring(rotate, { stiffness: 80, damping: 25 });
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollThreshold = 100; // Pixels needed to scroll to next item

  const items = [
    { img: "powder.jpeg", title: "Momentum Hover" },
    { img: "powder.jpeg", title: "Pixelate Render" },
    { img: "powder.jpeg", title: "List Hover" },
    { img: "powder.jpeg", title: "Card Slider" },
    // { img: "powder.jpeg", title: "Grid Motion" },
    // { img: "powder.jpeg", title: "Wave Effect" },
    // { img: "powder.jpeg", title: "Particle Flow" },
  ];

  useEffect(() => {
    let scrollAccumulator = 0;

    const handleScroll = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!inView) return;

      const deltaY = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;

      scrollAccumulator += deltaY;

      // Check if we've scrolled enough to move to next/previous item
      if (Math.abs(scrollAccumulator) >= scrollThreshold) {
        const direction = scrollAccumulator > 0 ? 1 : -1;
        // const newIndex = (currentIndex + direction + items.length) % items.length;
        const newIndex = currentIndex + direction;

        setCurrentIndex(newIndex);
        const anglePerItem = 360 / items.length;
        rotate.set(-newIndex * anglePerItem);

        // scrollAccumulator = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // lastScrollY.current = window.scrollY;

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, items.length, rotate]);

  const anglePerItem = 360 / items.length;

  return (
    <div className=" bg-white">
      {/* Spacer to enable scrolling */}
      {/* <div className="h-[50vh]" /> */}

      <div
        ref={containerRef}
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{
            rotateY: smoothRotate,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full max-w-[400px] aspect-[4/3]"
        >
          {items.map((item, i) => {
            const angle = anglePerItem * i;
            return (
              <motion.div
                key={i}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(min(40vw, 600px))`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                className="absolute inset-0 w-[min(60vw,260px)] h-[min(45vw,180px)] md:w-[360px] md:h-[280px] rounded-xl shadow-2xl overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-base md:text-lg font-semibold drop-shadow-lg">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {items.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
          <div className="text-white/60 text-sm animate-bounce">
            Scroll to rotate
          </div>
        </div> */}
      </div>

      {/* Spacer to enable scrolling */}
      <div className="h-[50vh]" />
    </div>
  );
}
