import React from "react";

const AboutData = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8f4ef] flex justify-center my-20 py-10 px-5">
      <div className="max-w-4xl bg-white shadow-md rounded-2xl p-8 border border-[#C19A6B]/30">
        <h1 className="text-3xl font-bold mb-4 text-center" style={{ color: "#C19A6B" }}>
          About Khatauli Gud
        </h1>

        <p className="text-gray-700 leading-relaxed mt-4">
          Welcome to <span className="font-semibold">Khatauli Gud</span>, your trusted destination for pure,
          premium-quality jaggery directly sourced from the heart of Khatauli — India’s
          most famous and largest producer of authentic jaggery.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          For generations, Khatauli has been known nationwide for its unmatched jaggery
          production. Our mission is to bring this natural sweetness to every home with
          guaranteed purity, freshness, and traditional taste.
        </p>

        <h2 className="text-xl font-semibold mt-8" style={{ color: "#C19A6B" }}>
          Why Choose Khatauli Gud?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
          <li>100% natural and chemical-free jaggery.</li>
          <li>Directly sourced from trusted Khatauli farmers.</li>
          <li>Freshly prepared using traditional techniques.</li>
          <li>Known for its rich taste, aroma, and purity.</li>
          <li>Multiple jaggery variants available including solid, powder, and liquid.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8" style={{ color: "#C19A6B" }}>
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mt-3">
          Our mission is to deliver authentic Khatauli jaggery across India with honesty
          and transparency, ensuring that every customer experiences purity the way it
          was meant to be.
        </p>

        <h2 className="text-xl font-semibold mt-8" style={{ color: "#C19A6B" }}>
          Our Vision
        </h2>
        <p className="text-gray-700 leading-relaxed mt-3">
          We aim to become India’s most trusted jaggery brand by keeping traditions
          alive, empowering local farmers, and promoting healthy, natural sweeteners.
        </p>

        <h2 className="text-xl font-semibold mt-8" style={{ color: "#C19A6B" }}>
          Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed mt-3">
          Have questions or want to know more? Feel free to reach out to us at:
          <br />
          <span className="font-semibold">Email:</span> support@khatauligud.com
        </p>
      </div>
    </div>
  );
};

export default AboutData;