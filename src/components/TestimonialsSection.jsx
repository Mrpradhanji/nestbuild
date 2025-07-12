import React from "react";

const testimonials = [
  {
    name: "Sarah A.",
    quote: "Nestify made renting my property effortless. Their team handles everything and my returns have never been better!",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "James P.",
    quote: "Professional, reliable, and transparent. I highly recommend Nestify for any property owner in Dubai.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Leila M.",
    quote: "Our guests always leave great reviews thanks to Nestify's attention to detail and guest support.",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex-1 bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <img src={t.img} alt={t.name} className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-primary" />
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <span className="font-semibold text-primary">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
