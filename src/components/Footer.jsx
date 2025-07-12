import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-100 pt-10 pb-4 mt-16 relative">
    {/* WhatsApp Bubble */}
    <a href="https://wa.me/97142459100" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition">
      <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.204-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.098 3.2 5.077 4.366.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zm-5.421 5.421h-.001a9.87 9.87 0 01-4.946-1.357l-.355-.211-3.682.964.984-3.587-.23-.369A9.86 9.86 0 012.1 12.003C2.1 6.478 6.574 2 12.1 2c2.652 0 5.145 1.037 7.027 2.921A9.825 9.825 0 0122.1 12c0 5.523-4.477 9.903-9.903 9.903z"/></svg>
    </a>
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg font-bold text-primary">Nestify</span>
      </div>
      {/* Footer Links */}
      <div className="flex flex-wrap gap-6 text-gray-300 text-sm mb-4 md:mb-0">
        <a href="/" className="hover:text-primary transition">Home</a>
        <a href="/pricing" className="hover:text-primary transition">Pricing</a>
        <a href="/contact" className="hover:text-primary transition">Contact Us</a>
        <a href="/careers" className="hover:text-primary transition">Careers</a>
        <a href="/blog" className="hover:text-primary transition">Blog</a>
        <a href="#" className="hover:text-primary transition">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition">Terms of Service</a>
      </div>
      {/* Newsletter */}
      <form className="flex gap-2">
        <input type="email" placeholder="Subscribe to newsletter" className="p-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none text-gray-100" />
        <button type="submit" className="bg-primary text-white px-4 rounded-r font-semibold hover:bg-primary-dark transition">Subscribe</button>
      </form>
      {/* Social Links */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" aria-label="Instagram" className="hover:text-primary"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm6 1.25a1 1 0 110 2 1 1 0 010-2z"/></svg></a>
        <a href="#" aria-label="Facebook" className="hover:text-primary"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.55 17.52 2 12 2S2 6.55 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/></svg></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-primary"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.3h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg></a>
      </div>
    </div>
    {/* Legal & Copyright */}
    <div className="mt-8 text-center text-gray-400 text-xs">
      <span>&copy; {new Date().getFullYear()} Nestify. All rights reserved. Made with <span className="text-red-400">❤️</span> by CobbleWeb.</span>
    </div>
  </footer>
)

export default Footer;

/*
  Animations (optional):
  Add this to your Tailwind config for the mobile menu:
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.3s ease-out',
      },
    },
  },
*/
