import React from "react";

const Blog = () => (
  <section className="py-20 bg-gray-50 min-h-[60vh]">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">Insights & Articles</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <article className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-primary">Renting vs Selling in Dubai</h2>
          <p className="text-gray-600 mb-4">Explore the pros and cons of renting your property short-term versus selling in the current Dubai market.</p>
          <a href="#" className="text-primary hover:underline font-medium">Read more</a>
        </article>
        <article className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-primary">Long-term vs Short-term Rentals</h2>
          <p className="text-gray-600 mb-4">Understand the benefits and challenges of each approach for Dubai landlords.</p>
          <a href="#" className="text-primary hover:underline font-medium">Read more</a>
        </article>
      </div>
    </div>
  </section>
);

export default Blog;
