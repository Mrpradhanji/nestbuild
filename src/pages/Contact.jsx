import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-white min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get Started with Nestify</h1>
        <p className="text-lg text-gray-600 mb-8">
          Ready to unlock your property’s potential? Fill out the form below and our team will be in touch to help you get started.
        </p>
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow flex flex-col gap-4 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="bg-primary text-white py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition">
            Get Started
          </button>
          {submitted && (
            <div className="mt-4 text-green-600 font-semibold text-center">
              Thank you! We’ll be in touch soon.
            </div>
          )}
        </form>
        <div className="text-left text-gray-700 space-y-2">
          <div><strong>Office:</strong> Regus, The Bridge, Office 504, Dubai Sport City</div>
          <div><strong>Phone:</strong> <a href="tel:+97142459100" className="text-primary hover:underline">+971 (4) 245 9100</a></div>
          <div><strong>Email:</strong> <a href="mailto:hello@nestify.ae" className="text-primary hover:underline">hello@nestify.ae</a></div>
          <div className="mt-4">
            <iframe title="Google Maps" src="https://www.google.com/maps?q=Regus,+The+Bridge,+Dubai+Sports+City&output=embed" width="100%" height="200" className="rounded"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
