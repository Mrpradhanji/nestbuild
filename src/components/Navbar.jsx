import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Placeholder SVG Logo */}
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xl font-bold text-primary">Nestify</span>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/pricing" className="hover:text-primary">Pricing</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
  
          <Link to="/blog" className="hover:text-primary">Blog</Link>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-primary-dark transition">Get In Touch</Link>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex flex-col">
          <div className="bg-white w-11/12 max-w-xs h-full shadow-lg p-8 flex flex-col gap-6 animate-slideInLeft">
            <button onClick={() => setMenuOpen(false)} className="self-end mb-4" aria-label="Close menu">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link to="/" className="text-lg font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/pricing" className="text-lg font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" className="text-lg font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link to="/blog" className="text-lg font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>Blog</Link>
          </div>
        </div>
      )}
     </nav>
  );
};

export default Navbar;
