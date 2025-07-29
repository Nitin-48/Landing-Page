import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "How do you fetch offers?",
      a: "Spendiz aggregates live offer data directly from banks and merchant partners via secure APIs and real-time scraping. Every offer is normalized, validated, and refreshed continuously."
    },
    {
      q: "Is my data safe?",
      a: "Absolutely. We use AES-256 end-to-end encryption, tokenization (only storing last four digits), and SOC-2 compliant cloud infrastructure. Quarterly security audits keep us vigilant."
    },
    {
      q: "Which banks are supported?",
      a: "Spendiz integrates with all major Indian banks—HDFC, SBI, ICICI, Axis, Kotak—and leading co-brand and corporate cards. We’re constantly adding more."
    },
    {
      q: "Can I share my account?",
      a: "Yes, Premium lets you share access with up to 5 family members or teammates."
    },
    {
      q: "How often are offers updated?",
      a: "Offers refresh in real time from banks and merchants—always the latest deals."
    }
  ];

  const filteredFaqs = faqData.filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-gradient-to-b from-[#050a17] via-gray-800 to-[#050a17] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 animate-[gradientShift_8s_linear_infinite]">
            Frequently Asked Questions
          </span>
        </h2>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* FAQ items */}
        <div className="space-y-4 sm:space-y-6">
          {filteredFaqs.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={`faq-item rounded-2xl overflow-hidden border
                ${isOpen
                  ? "border-teal-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                  : "border-gray-700 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"}
                bg-gray-800/60 backdrop-blur-md
                opacity-0 translate-y-6 animate-fadeInSmooth`}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left group"
                >
                  <span className="text-base sm:text-lg font-semibold group-hover:text-teal-300 transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`text-xl sm:text-2xl font-bold transform transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 text-teal-400"
                        : "text-gray-400 group-hover:text-cyan-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 pb-4 sm:pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background shapes */}
      <div className="pointer-events-none absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInUpSmooth {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInSmooth {
          animation: fadeInUpSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
