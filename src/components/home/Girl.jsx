"use client"
import Image from "next/image";

const Girl = () => {
  return (
    // Main Container
    <div className="min-h-screen font-sans antialiased bg-stone-50 text-gray-800">
      {/* Hero Section with Image and Overlay Text */}
      <section className="relative w-full h-[25vh] flex items-center justify-center text-center text-white overflow-hidden md:h-[70vh]">
        {/* Image Wrapper */}
        <div className="absolute inset-0 z-10">
          {/* NOTE: You need to replace the src with the actual path to your image in the /public folder */}
          <img
            src="/girlboy2.png"
            alt="Woman enjoying Khatauli Gud in a professional setting"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* <div className="relative z-20 bg-black bg-opacity-40 p-6 md:p-10 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 md:mb-5 drop-shadow-lg">
            Experience the Sweetness of Health with Khatauli Gud
          </h1>
          <p className="text-lg sm:text-xl font-light">
            Your daily dose of natural goodness, pure from the source.
          </p>
        </div> */}
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 relative">
          Why Choose Natural Jaggery (Gud)?
          <span className="block w-20 h-1 bg-gray-700 mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Benefit Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">
              Energy Booster
            </h3>
            <p className="text-gray-600">
              Provides instant energy without the sugar crash, thanks to its
              complex carbohydrates.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">
              Digestive Aid
            </h3>
            <p className="text-gray-600">
              Helps activate digestive enzymes and cleanse the intestines,
              promoting healthy digestion.
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">
              Rich in Minerals
            </h3>
            <p className="text-gray-600">
              Packed with essential minerals like iron, magnesium, calcium, and
              phosphorus, vital for health.
            </p>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">
              Natural Detox
            </h3>
            <p className="text-gray-600">
              Acts as a natural cleansing agent, helping to flush out toxins
              from the body and purify blood.
            </p>
          </div>
        </div>
      </section>

      {/* Khatauli Gud Special Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Discover Khatauli Gud: Purity You Can Taste
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
            At Khatauli, we believe in preserving the authentic taste and health
            benefits of traditional jaggery. Our Khatauli Gud is meticulously
            prepared from the finest sugarcane, ensuring a pure, unadulterated
            product that is free from chemicals and artificial additives.
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-[#C19A6B] leading-relaxed italic">
            Khatauli Gud is not just a sweetener; it's a commitment to your
            well-being. It's pure, it's natural, and it's simply the **best for
            your health.**
          </p>
          <button onClick={() => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth" });
  }} className="px-8 py-3 bg-[#C19A6B] text-white font-semibold rounded-full text-lg shadow-lg hover:bg-[#C19A6B] transition duration-300 transform hover:scale-105">
            Explore Our Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Girl;
