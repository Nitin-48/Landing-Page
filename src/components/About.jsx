import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import card from "../assets/card.png";
import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-white py-20 md:py-6 overflow-hidden"
    >
      {/* Heading */}
      <div
        className="text-center mb-16 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
            bg-gradient-to-r from-black to-gray-400
            bg-clip-text text-transparent -mb-10
            drop-shadow-md
          "
        >
          About Spendiz
        </h2>
      </div>

      {/* Card 1 */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="
          w-full
          rounded-2xl backdrop-blur-md
          transition-all duration-500 mb-10
        "
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={A1}
              alt="Who We Are"
              className="object-cover w-full h-full rounded-[14px] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Spendiz is a passionate team of financial technologists, data
              scientists, and customer experience specialists dedicated to making
              your credit card experience seamless. We help you maximize rewards,
              unlock hidden perks, and spend smarter with ease and clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="
          w-full
          rounded-2xl backdrop-blur-md

          transition-all duration-500
        "
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 ">
            <img
              src={A2}
              alt="Why We Built It"
              className="object-cover w-7xl h-100 rounded-[14px] hover:scale-105 transition-transform duration-500 "
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Why We Built It
            </h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-3 text-sm sm:text-base md:text-lg leading-relaxed">
              <li>
                <span className="text-gray-900 font-semibold">The Problem:</span>{" "}
                Hidden terms, minimum spend requirements, and scattered promos
                mean most cardholders miss out on valuable rewards and cashback.
              </li>
              <li>
                <span className="text-gray-900 font-semibold">Our Solution:</span>{" "}
                Spendiz aggregates real‑time offer data, instantly matching you
                with the best card for every purchase—no guesswork, just instant
                savings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
