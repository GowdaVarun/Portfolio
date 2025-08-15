import React, { useState, useEffect } from 'react';
import { LoaderPinwheel, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl transition-all duration-300 ease-in-out z-50 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-2xl border border-gray-700/30'
          : 'bg-gray-900/80 backdrop-blur-sm shadow-xl border border-gray-700/20'
      } rounded-2xl`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <LoaderPinwheel className="text-gray-50" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-1 sm:space-x-2">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-sm sm:text-base font-medium text-gray-50 rounded-xl transition-all duration-300 hover:text-cyan-400 hover:bg-gray-800/50 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col space-y-1 px-6 pb-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-50 rounded-lg transition-all duration-300 hover:text-cyan-400 hover:bg-gray-800/50"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
