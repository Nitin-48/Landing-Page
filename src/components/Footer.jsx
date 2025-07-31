import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
      <footer className="relative bg-white px-4 sm:px-6 pt-4 pb-6 border-t border-gray-300 text-gray-600 overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-black/5 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-72 sm:h-72 bg-black/5 blur-3xl rounded-full pointer-events-none animate-pulse"></div>

        {/* Main Flex Layout */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between top-4 items-start gap-y-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 text-sm">
            {/* Terms & Privacy */}
            <div className="flex gap-6">
              <a href="#" className="relative group">
                <span className="hover:text-black transition-colors">Terms of Service</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group">
                <span className="hover:text-black transition-colors">Privacy Policy</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-medium">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-1 hover:text-black transition-colors group relative">
                  <FaXTwitter className="text-lg" />
                  <span className="hidden sm:inline">Twitter</span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-black transition-colors group relative">
                  <FaLinkedinIn className="text-lg" />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-black transition-colors group relative">
                  <FaInstagram className="text-lg" />
                  <span className="hidden sm:inline">Instagram</span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Subscription */}
          <div className="max-w-lg w-full text-center sm:text-right">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Get updates, offers, and smart savings straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full sm:w-auto min-w-[250px] px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2025 <span className="font-semibold text-black">Spendiz</span>, Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
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
