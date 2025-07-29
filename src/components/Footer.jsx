import React, { useEffect, useState } from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // show back-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative px-4 sm:px-6 py-8 sm:py-10 bg-gradient-to-b from-[#050a17] via-gray-800 to-[#050a17] text-gray-400 border-t border-cyan-500/20 overflow-hidden">
        {/* Decorative gradient glows */}
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-teal-500/10 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-72 sm:h-72 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          {/* Left links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <a href="#" className="relative group">
              <span className="hover:text-teal-400 transition-colors">Terms of Service</span>
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-teal-400 transition-colors">Privacy Policy</span>
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Center info */}
          <div className="text-center space-y-1 sm:space-y-2">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 <span className="text-white font-semibold">Spendiz</span>, Inc. All rights reserved.
            </p>
            <p className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm items-center">
              <span className="text-gray-400">Follow us:</span>
              <a href="#" className="flex items-center gap-1 hover:text-teal-400 transition-colors">
                <FaTwitter className="text-lg" /> Twitter
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-teal-400 transition-colors">
                <FaLinkedinIn className="text-lg" /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-teal-400 transition-colors">
                <FaInstagram className="text-lg" /> Instagram
              </a>
            </p>
          </div>

          {/* Right subscribe */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl sm:rounded-full overflow-hidden border border-teal-500/40 backdrop-blur-md bg-gray-800/50 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-shadow duration-300 w-full sm:w-auto max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 sm:px-4 py-2 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base w-full sm:w-56"
              />
              <button
                type="submit"
                className="px-3 sm:px-5 py-2 bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-teal-400 hover:scale-[1.05] active:scale-95 transition-all duration-300 mt-2 sm:mt-0 sm:ml-0 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* ✅ Back To Top Floating Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-24 sm:bottom-12
            right-4 sm:right-6
            z-[9999]
            p-3 rounded-full
            bg-gradient-to-r from-teal-400 to-cyan-400
            shadow-lg hover:scale-110 transition-transform duration-300
          "
          aria-label="Back to Top"
        >
          ⬆️
        </button>
      )}
    </>
  );
};

export default Footer;
