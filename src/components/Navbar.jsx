import React, { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Wlogo from "../assets/Wlogo.png";
import Features from "./features";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "feature" },
    { label: "Work", id: "work" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 dark:bg-black/50 border-2 border-amber-300 backdrop-blur-md shadow-md transition-colors">
      {/* Scroll Progress Bar */}
      <div
        className="h-[3px] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 transition-all duration-150 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navbar content */}
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-4 lg:px-8 -translate-y-1.5">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src={Wlogo}
            alt="Spendiz"
            className="w-[220px] h-25 hover:scale-110 transition-transform duration-300 p-0"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <nav
            className="
              flex items-center space-x-4
              bg-black/90
              rounded-full
              px-5 py-3
              md:py-0 md:px-3
              lg:py-3 lg:px-5
              shadow-[0_0_15px_rgba(0,255,255,0.1)]
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="
                  text-gray-200 text-base font-medium px-3 py-1 rounded-full
                  hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 hover:text-black transition-all duration-200
                "
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="
                flex items-center text-gray-200 text-base font-medium px-3 py-1 rounded-full
                hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 hover:text-black transition-all duration-200
              "
            >
              Contact us <ChevronRight size={16} className="ml-1" />
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#"
            className="
              bg-gradient-to-r from-gray-600 via-white/25 to-gray-600
              text-white text-base font-bold
              px-5 py-3
              md:py-0 md:px-3
              lg:py-3 lg:px-5
              rounded-full
              hover:scale-[1.05] transition-transform duration-200
            "
          >
            Download now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-transform duration-600 ease-in-out
          ${isOpen ? "max-h-[350px] py-4" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-4 bg-white/40 dark:bg-black/70 backdrop-blur-md text-black dark:text-white p-5 rounded-2xl border border-cyan-400/30 mx-4 shadow-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={toggleMenu}
                className="block text-lg hover:text-gray-400 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="flex items-center gap-1 text-lg hover:text-cyan-400 transition-colors"
            >
              Contact us <ChevronRight size={16} />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={toggleMenu}
              className="
                block text-lg font-bold
                bg-gradient-to-r from-black to-gray-400
                text-white px-4 py-2
                rounded-full text-center
                border border-cyan-400/40
                hover:scale-[1.05] transition-transform duration-200
              "
            >
              Download now
            </a>
          </li>
        </ul>

        {/* Optional Mobile Features Section */}
        <div className="mt-6 px-4">
          <Features />
        </div>
      </div>
    </header>
  );
}