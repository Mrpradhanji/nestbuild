import React from "react";

const pricingPlans = [
  {
    title: "ADJUSTABLE",
    rate: "FROM 17%",
    description:
      "You choose the length of your commitment and our service will show you made the right choice. Less commitment, more flexibility.",
    features: [
      "Complete property management",
      "Tech fuelled pricing algorithms to maximise yield",
      "24/7 guest service and quality housekeeping",
      "Bespoke landlord dashboard",
    ],
  },
  {
    title: "12 MONTHS",
    rate: "FROM 15%",
    description:
      "You choose to trust our expertise for the next 12 months with a competitive management fee. More commitment, more rewards.",
    features: [
      "Complete property management",
      "Tech fuelled pricing algorithms to maximise yield",
      "24/7 guest service and quality housekeeping",
      "Bespoke landlord dashboard",
      "Dedicated price analyst",
      "Dedicated property manager",
    ],
  },
];

const faqs = [
  {
    q: "How do you deal with guest damage to my property?",
    a: "If anything in your property has been damaged, our housekeepers will alert us as soon as they notice the problem. Then, we assess on a case-by-case basis. Light wear and tear is to be expected and isn’t considered a damage. We strongly advise that you look into short-let insurance for your property.",
  },
  {
    q: "Do you provide linens and towels?",
    a: "Yes. We provide hotel-quality linens and towels as part of our housekeeping services. We also include replenishment of toiletries and cleaning supplies.",
  },
  {
    q: "Can I rent out just my room?",
    a: "We let entire homes only, hence we cannot rent just one room of the property. However, you can use one room locked away for storage if you intend to.",
  },
  {
    q: "How do you vet/select my future guest?",
    a: "We vet each and every guest. Our process is thorough, checking guest identification, positive reviews, verified profiles, and deposits are compulsory. For medium and long lets, we also carry out credit and employment referencing.",
  },
  {
    q: "Who can use Nestify service?",
    a: "Whether it’s your primary, secondary, buy-to-let investment, or if your property is vacant all year or just a part, our Airbnb property management can assist. The property must be fully furnished and adhere to lettings regulations.",
  },
  {
    q: "How do you set up the price for my property?",
    a: "The right price depends on several factors: property characteristics, rental period, seasonality, local events, and booking length. We use a dynamic pricing tool to update your rental rates daily and maximise your income.",
  },
  {
    q: "What is Nestify's standard management fee?",
    a: "We start from 13%+VAT with a 1 year commitment (16%+VAT without commitment). This may vary depending on your home, location, and number of bedrooms. Fees are agreed individually and charged on the nightly rate of each booking, less platform commission charges.",
  },
  {
    q: "How do you calculate your fees?",
    a: "Our fees are charged on each booking, less platform commission charges. Cleaning is paid by the guest. For example, a booking of 4 nights at 1100 AED per night: Rental Revenue = 4400 AED, Management fees 13%+VAT = 600.60 AED, Net income = 3799.4 AED.",
  },
];

const Pricing = () => (
  <div className="bg-white min-h-[60vh] py-16">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Pricing</h1>
      <p className="text-lg text-gray-600 mb-10">
        Unlock the potential of your home, your property, or your portfolio. Our different plans are designed to answer the needs of every homeowner thanks to our unique solution of flexible lettings.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
        {pricingPlans.map((plan, idx) => (
          <div key={plan.title} className="flex-1 bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center">
            <div className="text-primary text-2xl font-bold mb-2">{plan.title}</div>
            <div className="text-4xl font-extrabold text-gray-900 mb-2">{plan.rate}</div>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <ul className="text-left text-gray-700 list-disc list-inside mb-4">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-primary-dark transition mt-auto">Get Started</button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Your questions answered</h2>
      <div className="space-y-4 text-left max-w-2xl mx-auto mb-12">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-gray-50 p-4 rounded shadow">
            <summary className="font-semibold cursor-pointer">{faq.q}</summary>
            <p className="mt-2 text-gray-600">{faq.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-8">
        <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition text-lg">Contact Us</a>
      </div>
    </div>
  </div>
);

export default Pricing;
