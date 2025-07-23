import React, { useState } from "react";

const EstimateForm = () => {
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [studio, setStudio] = useState("");
  const [showEstimate, setShowEstimate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEstimate(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-200">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your trusted flexible rental partner
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Find out what you could earn with{" "}
            <span className="font-semibold text-indigo-500">Nestify</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Property Location (e.g. Dubaï Downtown)"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={studio}
            onChange={(e) => setStudio(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Studio
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full font-semibold shadow-md transition"
          >
            Get Estimate
          </button>
        </form>

        {showEstimate && (
          <div className="mt-10 p-6 bg-gray-100 rounded-2xl shadow text-center animate-fade-in">
            <h3 className="text-lg font-semibold text-indigo-500 mb-2">
              Estimated Earnings
            </h3>
            <p className="text-4xl font-bold text-gray-900">AED 27,675</p>
            <span className="text-gray-600 text-sm">per month</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default EstimateForm;
