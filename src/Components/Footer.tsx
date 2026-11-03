import React from "react";
import FooterLogo from "./../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4 md:gap-8 lg:py-14">
          {/* Column 1: Brand Information */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block">
              <img src={FooterLogo} alt="Dev Stack" className="w-[110px]" />
            </a>

            <p className="mt-3 max-w-[280px] text-[13px] leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="text-[12px] font-medium text-slate-600 transition-colors hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] font-medium text-slate-600 transition-colors hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[12px] font-medium text-slate-600 transition-colors hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="footer-link">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 py-6 sm:flex-row">
          <p className="text-center text-[12px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[12px] text-slate-400 transition-colors hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[12px] text-slate-400 transition-colors hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
