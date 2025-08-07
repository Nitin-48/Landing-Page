import React from "react";
import investor from "../assets/investor.svg"; // Assuming you have an SVG for investors

const InvestorSection = () => {
  return (
    <section className="relative bg-black text-white py-16 px-4 sm:px-8 md:px-16 xl:px-24">
      <div className="max-w-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-white bg-clip-text text-transparent">
            For Investors <br /><span className="text-gray-400 text-2xl">(Join the Future of Spending )</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Spendiz is reshaping how India uses credit cards — smarter, faster,
            and fully optimized. We help users maximize rewards, avoid hidden
            charges, and unlock the best offers across all their cards.
          </p>

          <div className="mt-8 space-y-4 text-base text-gray-400">
            <p>📈 <strong>14,000+ cards optimized</strong> via our platform</p>
            <p>💳 <strong>INR 8Cr+ saved</strong> in missed rewards till date</p>
            <p>🧠 AI-powered engine for real-time offer matching</p>
            <p>📱 Growing user base across Tier 1 & Tier 2 cities</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/investor-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition text-center"
            >
              Get Our Investor Deck →
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition text-center"
            >
              Become an Investor
            </a>
          </div>

        </div>

        {/* RIGHT: Illustration or Image */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={investor}
            alt="Spendiz Growth Graph"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Background circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default InvestorSection;
