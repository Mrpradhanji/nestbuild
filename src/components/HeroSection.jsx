import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gray-50 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Elevate Your <span className="text-primary">Living</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Premium property management and short-term rental solutions in Dubai. Unlock higher returns and hassle-free hosting with Nestify.
          </p>
          <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition">Get Started</a>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center">
          <img src="/assets/hero-main.png" alt="Nestify Dubai" className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
