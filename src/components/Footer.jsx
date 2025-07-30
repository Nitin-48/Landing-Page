import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ New Twitter X icon
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="relative px-4 sm:px-6 pt-8 pb-5 bg-white text-gray-600 border-t border-gray-300 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-black/5 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-72 sm:h-72 bg-black/5 blur-3xl rounded-full pointer-events-none animate-pulse"></div>

        {/* Top Row: Links + Socials */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap items-start justify-between gap-x-8 gap-y-6">
          {/* Left: Terms & Privacy as a row */}
          <div className="flex flex-row flex-wrap gap-6 text-sm min-w-[120px]">
            <a href="#" className="relative group">
              <span className="hover:text-black transition-colors">Terms of Service</span>
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-black transition-colors">Privacy Policy</span>
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right: Social */}
          <div className="flex flex-row flex-wrap items-center gap-2 text-sm">
            <span className="text-gray-500 font-medium">Follow us:</span>
            <div className="flex flex-row flex-wrap gap-2">
              <a href="#" className="flex items-center relative group gap-2 hover:text-black transition-colors">
                <FaXTwitter className="text-lg" /> Twitter
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#" className="flex items-center relative group gap-2 hover:text-black transition-colors">
                <FaLinkedinIn className="text-lg" /> LinkedIn
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#" className="flex items-center relative group gap-2 hover:text-black transition-colors">
                <FaInstagram className="text-lg" /> Instagram
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Centered Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2025 <span className="font-semibold text-black">Spendiz</span>, Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-10 right-4 sm:right-6 z-[9999] p-3 rounded-full bg-gradient-to-r from-black/60 to-gray-400 text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Back to Top"
        >
          <FiChevronUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default Footer;
