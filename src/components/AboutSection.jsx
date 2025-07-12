import React from "react";

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Nestify</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Nestify is Dubai's premier property management partner, specializing in short-term rentals and maximizing returns for property owners. Our expert team ensures hassle-free hosting, guest satisfaction, and optimal occupancy rates—all while you relax and watch your investment grow.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
        <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Expert Team</h3>
          <p className="text-gray-600">Our experienced professionals handle everything—from marketing to guest relations—so you don’t have to.</p>
        </div>
        <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Maximized Returns</h3>
          <p className="text-gray-600">We use smart pricing and proven strategies to ensure your property earns its full potential.</p>
        </div>
        <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Seamless Experience</h3>
          <p className="text-gray-600">From cleaning to check-in, we deliver a seamless experience for both owners and guests.</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
