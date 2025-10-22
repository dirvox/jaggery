"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center  text-center py-20 px-4 bg-[#FAF8F5]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About KhatauliGud
      </h2>
      <p className="text-gray-700 text-base md:text-lg max-w-2xl mt-5 leading-relaxed">
        At <span className="font-semibold text-amber-700">KhatauliGud</span>, we believe in
        delivering the purest form of sweetness. Our jaggery is handcrafted using
        traditional methods — no chemicals, no preservatives, just nature’s
        goodness.
      </p>
    </section>
  );
};

export default AboutSection;
