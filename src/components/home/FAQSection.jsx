const FAQSection = () => {
  const faqs = [
    { question: "Is your jaggery chemical-free?", answer: "Yes, we use traditional methods with no chemicals." },
    { question: "Do you deliver across India?", answer: "Yes, we provide nationwide delivery." },
    { question: "Can I buy in bulk?", answer: "Absolutely! Contact us for bulk orders." },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto text-left space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-l-4 border-amber-600 pl-4">
            <h4 className="font-semibold text-lg">{faq.question}</h4>
            <p className="text-gray-500">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection