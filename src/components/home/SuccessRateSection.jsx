const SuccessRateSection = () => {
  const stats = [
    { label: "Orders Delivered", value: 1250 },
    { label: "Success Rate", value: "99.5%" },
    { label: "Happy Customers", value: "1200+" },
    { label: "Years of Experience", value: 2},
  ];

  return (
    <section className="py-20 bg-[#C19A6B] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <h3 className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessRateSection;
