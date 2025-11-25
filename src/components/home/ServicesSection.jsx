const ServicesSection = () => {
  const services = [
    { name: "Pure Jaggery", description: "100% natural and Pure.", icon: "🍯" },
    { name: "Handcrafted", description: "Made using traditional methods.", icon: "🤲" },
    { name: "Organic", description: "Healthy and safe for all ages.", icon: "🌱" },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
