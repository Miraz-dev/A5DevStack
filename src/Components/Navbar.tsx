import React, { useState } from "react";

import Logo from "./../assets/logo-text.png";
import hamburgerIcon from "./../assets/hamburger.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="relative border-b border-gray-100 bg-white">
      <div className="mx-auto grid h-[72px] max-w-6xl grid-cols-3 items-center px-4 sm:px-6">
        {/* Left: Hamburger (Mobile) / Logo (Desktop) */}
        <div className="flex items-center">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <img src={hamburgerIcon} alt="" className="h-6 w-6" />
          </button>

          {/* Desktop Logo */}
          <a href="#" className="hidden md:block">
            <img src={Logo} alt="Dev Stack" className="w-[120px]" />
          </a>
        </div>

        {/* Center: Logo (Mobile) / Navigation (Desktop) */}
        <div className="flex justify-center">
          {/* Mobile Logo */}
          <a href="#" className="md:hidden">
            <img src={Logo} alt="Dev Stack" className="w-[120px]" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href="#"
                  className={`text-[13px] transition-colors hover:text-pink-500 ${
                    index === 0 ? "font-medium text-pink-500" : "text-slate-600"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Authentication Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <button className="whitespace-nowrap text-xs text-slate-700 transition-colors hover:text-pink-500 sm:text-[13px]">
            Sign In
          </button>

          <button className="whitespace-nowrap rounded-full bg-pink-600 px-3 py-2 text-xs text-white transition-colors hover:bg-pink-700 sm:px-5 sm:text-[13px]">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-gray-100 bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-pink-50 hover:text-pink-500 ${
                    index === 0 ? "font-medium text-pink-500" : "text-slate-600"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
