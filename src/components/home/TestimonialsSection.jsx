"use client";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Ramesh Kumar", text: "Best jaggery I have ever tasted!", rating: 5 },
    { name: "Sita Verma", text: "Pure, healthy, and very tasty.", rating: 4.5 },
    { name: "Amit Sharma", text: "Highly recommend KhatauliGud products.", rating: 5 },
    { name: "Priya Singh", text: "Good quality but a bit expensive.", rating: 4 },
    { name: "Vikram Patel", text: "Loved the taste and purity!", rating: 4.5 },
    { name: "Anjali Mehra", text: "Will buy again for sure.", rating: 5 },
    { name: "Rohit Yadav", text: "Nice product, delivery was fast.", rating: 4 },
    { name: "Neha Gupta", text: "Amazing! Very satisfied.", rating: 5 },
  ];

  return (
    <section className="py-20 bg-[#C19A6B] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Customer Reviews</h2>

      {/* Container with max width and centered */}
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto space-x-6 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollPaddingLeft: '1rem' }}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-72 md:w-80 bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all flex-shrink-0 snap-center"
            >
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold mb-2">{t.name}</h4>
              <p className="text-yellow-500">
                {Array.from({ length: Math.floor(t.rating) }, (_, i) => "⭐")}
                {t.rating % 1 !== 0 ? "⭐️" : ""}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
