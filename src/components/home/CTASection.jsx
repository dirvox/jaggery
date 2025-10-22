"use client"
const CTASection = () => {
  return (
    <section className="py-20 bg-[#C19A6B] text-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Pure Jaggery Today!</h2>
      <p className="mb-8">Experience the goodness of handcrafted KhatauliGud jaggery.</p>
      <button   onClick={() => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth" });
  }} className="bg-white text-[#C19A6B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
        Shop Now
      </button>
    </section>
  );
};

export default CTASection