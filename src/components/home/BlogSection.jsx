"use client";
import React, { useState } from "react";

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "Health Benefits of Jaggery",
      summary: "Learn why jaggery is better than sugar.",
      content: `Jaggery, also known as 'gur', is a natural sweetener derived from sugarcane or palm sap. Unlike refined sugar, jaggery retains minerals like iron, calcium, magnesium, and potassium, making it a healthier alternative. Consuming jaggery in moderation can help detoxify the liver, aid digestion, improve immunity, and provide instant energy. Its natural sweetness also helps reduce sugar cravings and supports a healthier lifestyle.`,
      image: "/banner.jpg",
    },
    {
      title: "Traditional Jaggery Making",
      summary: "Step-by-step guide to handcrafted jaggery.",
      content: `Traditional jaggery is made by boiling sugarcane juice in large pans until it solidifies. This process involves no chemicals or artificial additives, preserving the natural flavor and nutrients. The handcrafted process ensures high quality and pure taste, unlike mass-produced sugar. Artisans take pride in every batch, ensuring consistency and authenticity.`,
      image: "/banner.jpg",
    },
    {
      title: "Recipes with Jaggery",
      summary: "Delicious recipes using pure jaggery.",
      content: `Jaggery can be used in a variety of recipes like sweets, teas, porridge, and desserts. Popular dishes include jaggery rice (gur wale chawal), jaggery laddoo, and jaggery tea. Its rich, caramel-like flavor enhances the taste of both traditional and modern recipes. Using jaggery instead of sugar not only adds taste but also nutritional benefits.`,
      image: "/banner.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">From Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-500 mb-4">{blog.summary}</p>
            <button
              onClick={() => setSelectedBlog(blog)}
              className="text-[#C19A6B] font-semibold hover:underline"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
{selectedBlog && (
  <div
    className="fixed inset-0  bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedBlog(null)} // close when clicking outside modal
  >
    <div
      className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-y-auto max-h-[90vh] relative"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >
      <button
        onClick={() => setSelectedBlog(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold"
      >
        &times;
      </button>

      {selectedBlog.image && (
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      )}

      <div className="p-6 text-left">
        <h3 className="text-2xl font-bold mb-4">{selectedBlog.title}</h3>
        <p className="text-gray-700 leading-relaxed">{selectedBlog.content}</p>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default BlogSection;
