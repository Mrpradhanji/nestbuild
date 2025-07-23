import React from "react";
import { HeroSection, AboutSection, TestimonialsSection } from "../components";
import EstimateForm from "../components/EstimateForm";

const Home = () => (
  <>
    <HeroSection />
    {/* Earnings Estimator Section (replaced with EstimateForm) */}
    <EstimateForm />
    {/* About, Benefits, Supported Platforms, Testimonials, FAQ */}
    <AboutSection />
    {/* Supported Platforms */}
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" alt="Airbnb" className="h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Booking.com_logo.svg" alt="Booking.com" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/TripAdvisor_logo.svg" alt="TripAdvisor" className="h-8" />
        <span className="text-gray-400 font-semibold">+ more</span>
      </div>
    </section>
    {/* FAQ Section (placeholder) */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold cursor-pointer">How does your service work?</summary>
            <p className="mt-2 text-gray-600">We handle everything from listing and guest communication to cleaning and maintenance, so you can enjoy passive income stress-free.</p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold cursor-pointer">What platforms do you support?</summary>
            <p className="mt-2 text-gray-600">We list your property on Airbnb, Booking.com, TripAdvisor, and more to maximize your occupancy and earnings.</p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold cursor-pointer">How do I get started?</summary>
            <p className="mt-2 text-gray-600">Just contact us and our team will guide you through the onboarding process!</p>
          </details>
        </div>
      </div>
    </section>
    <TestimonialsSection />
  </>
);

export default Home;
