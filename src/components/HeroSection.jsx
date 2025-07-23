import React from "react";

const HeroSection = () => {
  return (
    <section
      className="pt-32 pb-16 min-h-[70vh] flex items-center relative bg-gray-50"
      style={{
        backgroundImage: "url('/images/Hero_Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 mb-6">
            Elevate Your <span className="text-primary">Living</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Premium property management and short-term rental solutions in Dubai. Unlock higher returns and hassle-free hosting with Nestify.
          </p>
          <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition">Get Started</a>
        </div>
        {/* Right: Hero Image (removed) */}
      </div>
    </section>
  );
};

export default HeroSection;
