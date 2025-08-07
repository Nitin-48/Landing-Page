import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "How does Spendiz find the best offers?",
      a: "Spendiz fetches live offers directly from banks and partner merchants using secure APIs and real-time web scraping. All offers are cleaned, verified, and constantly refreshed.",
    },
    {
      q: "Is my card or personal data secure?",
      a: "Yes. We use bank-grade AES-256 encryption, tokenization (we only store the last 4 digits), and deploy on a SOC 2 compliant cloud. We also conduct regular security audits.",
    },
    {
      q: "Which banks and cards are supported?",
      a: "Spendiz currently supports credit cards from HDFC, ICICI, SBI, Axis, Kotak, and many co-branded and corporate cards. We keep adding new cards regularly.",
    },
    {
      q: "Can I share my Spendiz account?",
      a: "Yes. On our Premium plan, you can share access with up to 5 family members or team members for optimized spend tracking.",
    },
    {
      q: "How often are offers and deals updated?",
      a: "All offers are updated in real-time. As soon as a bank or merchant updates or ends an offer, Spendiz reflects that instantly.",
    },
  ];

  const filteredFaqs = faqData.filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative bg-white text-gray-900 dark:bg-black dark:text-white overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-8 xl:px-12 py-20 max-w-[] xl:max-w-5xl 2xl:max-w-500  mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-300 animate-[gradientShift_8s_linear_infinite]">
            Frequently Asked Questions
          </span>
        </h2>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 md:p-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white/80 dark:bg-gray-900 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {filteredFaqs.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? "border-black shadow-[0_0_20px_rgba(13,148,136,0.3)]"
                    : "border-white hover:border-gray-400 hover:shadow-[0_0_12px_rgba(13,148,136,0.15)]"
                } bg-white dark:bg-gray-900`}
              >
                <button
                  className="w-full px-5 py-4 flex justify-between items-center text-left group"
                  onClick={() => toggleFAQ(i)}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium group-hover:text-black dark:group-hover:text-white">
                    {item.q}
                  </span>
                  <span
                    className={`text-2xl font-bold transform transition-transform ${
                      isOpen
                        ? "rotate-45 text-black dark:text-white"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
