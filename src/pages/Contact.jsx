import React from "react";

const Contact = () => (
  <section className="py-20 bg-white min-h-[60vh]">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">We'd love to help you maximize your rental income. Reach out to our team today.</p>
      <form className="bg-gray-50 p-8 rounded-xl shadow flex flex-col gap-4 mb-8">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <textarea placeholder="Your Message" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" rows="4" required></textarea>
        <button type="submit" className="bg-primary text-white py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition">Send Message</button>
      </form>
      <div className="text-left text-gray-700 space-y-2">
        <div><strong>Office:</strong> Regus, The Bridge, Office 504, Dubai Sports City</div>
        <div><strong>Phone:</strong> <a href="tel:+97142459100" className="text-primary hover:underline">+971 (4) 245 9100</a></div>
        <div><strong>Email:</strong> <a href="mailto:info@yourcompany.com" className="text-primary hover:underline">info@yourcompany.com</a></div>
        <div className="mt-4">
          <iframe title="Google Maps" src="https://www.google.com/maps?q=Regus,+The+Bridge,+Dubai+Sports+City&output=embed" width="100%" height="200" className="rounded"></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
