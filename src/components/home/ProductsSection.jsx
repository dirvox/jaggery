"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import baseUrl from "../server/baseurl";




const ProductsSection = () => {





useEffect(() => {

  console.log("use effect called function")
    const checkBackend = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/items/democheck`);
        console.log("Backend response:", response.data);
      } catch (err) {
        console.error("Backend error:", err.message);
      }
    };

    checkBackend();
  }, []);
  
  const products = [
    { name: "Organic Jaggery Block", img: "/blocks.jpeg" },
    { name: "Jaggery Powder", img: "/powder.jpeg" },
    { name: "Jaggery Cubes", img: "/cube.jpeg" },
  ];

  return (
    <section id="products" className="bg-[#FAF8F5] py-20 px-5">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-12">
        Our Products
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {products.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div className="relative w-full h-64">
              <img
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h5 className="text-[#C19A6B] font-semibold text-xl mb-2">
                {item.name}
              </h5>
              <p className="text-gray-700 mb-4">
                Pure & chemical-free jaggery, perfect for your everyday health.
              </p>
              <button className="bg-[#FFBF00] text-[#1C1C1C] px-6 py-2 rounded-full font-semibold hover:bg-[#e6ac00] transition-all">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
