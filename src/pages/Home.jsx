import React from "react";
import { HeroSection, AboutSection, TestimonialsSection } from "../components";

const Home = () => (
  <>
    <HeroSection />
    {/* Earnings Estimator Section (refined) */}
    <section className="py-16 bg-gradient-to-r from-primary/10 to-white">
      <div className="max-w-2xl mx-auto px-6 text-center rounded-2xl shadow-lg bg-white/80">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 flex items-center justify-center gap-2">
          <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
          Get Your Free Estimate
        </h2>
        <p className="mb-6 text-gray-600">See how much your property can earn on Airbnb & other platforms.<br className="hidden md:block"/> No obligation, instant & secure.</p>
        <form className="flex flex-col gap-4 items-center">
          <input type="text" placeholder="Location (e.g. Dubai Marina)" className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary w-full" />
          <div className="flex gap-4 w-full">
            <select className="flex-1 p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="Apartment">
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Penthouse</option>
              <option>Studio</option>
            </select>
            <div className="flex-1 flex flex-col items-start">
              <label className="text-sm text-gray-500 mb-1">Bedrooms</label>
              <input type="range" min="1" max="6" defaultValue="2" className="w-full accent-primary" />
              <div className="text-xs text-gray-400 flex w-full justify-between"><span>1</span><span>6+</span></div>
            </div>
          </div>
          <button type="button" className="bg-primary text-white px-10 py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition mt-2 text-lg flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            Show My Estimate
          </button>
        </form>
        <div className="mt-6 text-green-600 font-bold text-xl flex items-center justify-center gap-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg>
          Potential: AED 8,500/month <span className="text-gray-400 text-base">(sample)</span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1"><svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Secure & Private</div>
          <div className="flex items-center gap-1"><svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg> No obligation</div>
          <div className="flex items-center gap-1"><svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg> Instant result</div>
        </div>
      </div>
    </section>
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
