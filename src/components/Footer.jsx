import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-100 py-8 mt-16">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg font-bold text-primary">Nestify</span>
      </div>
      <span className="text-gray-400">&copy; {new Date().getFullYear()} Nestify. All rights reserved.</span>
      <div className="flex gap-4">
        <a href="#" className="hover:text-primary transition">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
