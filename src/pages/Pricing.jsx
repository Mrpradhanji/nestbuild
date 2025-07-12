import React from "react";

const Pricing = () => (
  <section className="py-20 bg-white min-h-[60vh]">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Pricing & Commission</h1>
      <p className="text-lg text-gray-600 mb-8">We offer transparent pricing and competitive commissions so you keep more of your earnings.</p>
      <div className="bg-gray-50 p-8 rounded-xl shadow flex flex-col gap-4 items-center">
        <div className="text-6xl font-bold text-primary">15%</div>
        <div className="text-gray-700 font-semibold">All-inclusive commission rate</div>
        <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
          <li>No hidden fees</li>
          <li>Includes guest support, cleaning, and maintenance</li>
          <li>Free property onboarding</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
