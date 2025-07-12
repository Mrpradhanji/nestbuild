import React from "react";

const Careers = () => (
  <section className="py-20 bg-white min-h-[60vh]">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Careers</h1>
      <p className="text-lg text-gray-600 mb-8">Join our growing team! See open roles and apply below.</p>
      <div className="bg-gray-50 p-8 rounded-xl shadow flex flex-col gap-4 mb-8">
        <div className="font-semibold text-primary">Open Roles</div>
        <ul className="text-left text-gray-700 list-disc list-inside">
          <li>Operations Coordinator</li>
          <li>Sales Manager</li>
          <li>Guest Relations Specialist</li>
        </ul>
      </div>
      <form className="bg-white p-8 rounded-xl shadow flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <input type="text" placeholder="Role Applying For" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <textarea placeholder="Tell us about yourself" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" rows="4" required></textarea>
        <button type="submit" className="bg-primary text-white py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition">Apply Now</button>
      </form>
    </div>
  </section>
);

export default Careers;
