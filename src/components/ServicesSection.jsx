import React from "react";

const services = [
  {
    icon: (
      <svg className="h-10 w-10 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M16 3v4H8V3"/><path d="M12 12v2m0 4h.01"/></svg>
    ),
    title: "Property Marketing",
    desc: "Professional photography, listing optimization, and multi-platform exposure."
  },
  {
    icon: (
      <svg className="h-10 w-10 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
    ),
    title: "Guest Management",
    desc: "24/7 guest support, screening, and seamless check-in/check-out."
  },
  {
    icon: (
      <svg className="h-10 w-10 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4H8V3"/></svg>
    ),
    title: "Maintenance & Cleaning",
    desc: "Hotel-grade cleaning, regular inspections, and prompt maintenance."
  }
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Services</h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Comprehensive solutions for property owners: we handle everything so you can relax and enjoy the returns.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {services.map((service, idx) => (
          <div key={idx} className="flex-1 bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            {service.icon}
            <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
