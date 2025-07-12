import React from "react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get In Touch</h2>
      <p className="text-lg text-gray-600 mb-8">Ready to maximize your property’s potential? Contact our team today.</p>
      <form className="bg-gray-50 p-8 rounded-xl shadow flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <textarea placeholder="Your Message" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" rows="4" required></textarea>
        <button type="submit" className="bg-primary text-white py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
