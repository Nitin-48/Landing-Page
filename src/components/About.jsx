import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import card from "../assets/card.png";
import { FaGift, FaBell } from "react-icons/fa";


export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-out-cubic",
      once: true, // only animate once
    });
  }, []);

  return (
    <section
      id="about"
      className="
        relative min-h-screen
        bg-gradient-to-br from-gray-950 via-[#081a2b] to-[#0f172a]
        px-4 sm:px-8 lg:px-20
        py-20 md:py-28
        flex flex-col items-center overflow-hidden
      "
    >

      {/* Heading */}
      <div
        className="text-center mb-16 max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
            bg-gradient-to-r from-teal-400 via-cyan-300 to-white
            bg-clip-text text-transparent
            drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]
          "
        >
          About Spendiz
        </h2>
        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          Discover how Spendiz is transforming credit card usage with smarter
          recommendations and real-time insights.
        </p>
      </div>

      {/* Card 1 */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="
          group flex flex-col md:flex-row items-center
          bg-gray-800/70 border border-gray-700
          rounded-3xl backdrop-blur-md overflow-hidden
          w-full max-w-6xl mb-12
          shadow-[0_0_25px_rgba(34,211,238,0.2),0_20px_50px_rgba(0,0,0,0.5)]
          hover:shadow-[0_0_35px_rgba(34,211,238,0.5),0_25px_60px_rgba(0,0,0,0.7)]
          hover:border-cyan-400/50
          transition-all duration-500
        "
      >
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={card}
            alt="Who We Are"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Who We Are
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-0">
            Spendiz is a passionate team of financial technologists, data
            scientists, and customer experience specialists dedicated to making
            your credit card experience seamless. We help you maximize rewards,
            unlock hidden perks, and spend smarter with ease and clarity.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="
          group flex flex-col md:flex-row-reverse items-center
          bg-gray-800/70 border border-gray-700
          rounded-3xl backdrop-blur-md overflow-hidden
          w-full max-w-6xl
          shadow-[0_0_25px_rgba(139,92,246,0.2),0_20px_50px_rgba(0,0,0,0.5)]
          hover:shadow-[0_0_35px_rgba(139,92,246,0.5),0_25px_60px_rgba(0,0,0,0.7)]
          hover:border-purple-400/50
          transition-all duration-500
        "
      >
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={card}
            alt="Why We Built It"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Why We Built It
          </h3>
          <ul className="text-gray-300 list-disc pl-5 space-y-3 text-sm sm:text-base md:text-lg leading-relaxed">
            <li>
              <span className="text-white font-semibold">The Problem:</span>{" "}
              Hidden terms, minimum spend requirements, and scattered promos
              mean most cardholders miss out on valuable rewards and cashback.
            </li>
            <li>
              <span className="text-white font-semibold">Our Solution:</span>{" "}
              Spendiz aggregates real‑time offer data, instantly matching you
              with the best card for every purchase—no guesswork, just instant
              savings.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
