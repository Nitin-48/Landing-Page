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
      a: "Spendiz aggregates live offer data directly from banks and merchant partners via secure APIs and real-time scraping. Every offer is normalized, validated, and refreshed continuously.",
    },
    {
      q: "Is my data safe?",
      a: "Absolutely. We use AES-256 end-to-end encryption, tokenization (only storing last four digits), and SOC-2 compliant cloud infrastructure. Quarterly security audits keep us vigilant.",
    },
    {
      q: "Which banks are supported?",
      a: "Spendiz integrates with all major Indian banks—HDFC, SBI, ICICI, Axis, Kotak—and leading co-brand and corporate cards. We’re constantly adding more.",
    },
    {
      q: "Can I share my account?",
      a: "Yes, Premium lets you share access with up to 5 family members or teammates.",
    },
    {
      q: "How often are offers updated?",
      a: "Offers refresh in real time from banks and merchants—always the latest deals.",
    },
  ];

  const filteredFaqs = faqData.filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-white text-gray-800 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-400 animate-[gradientShift_8s_linear_infinite]">
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
            className="w-full p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-400"
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
                ${
                  isOpen
                    ? "border-black shadow-[0_0_20px_rgba(13,148,136,0.2)]"
                    : "border-gray-200 hover:border-gray-400/60 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                }
                bg-white opacity-0 translate-y-6 animate-fadeInSmooth`}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left group"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-600 group-hover:text-gray-800 transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`text-xl sm:text-2xl font-bold transform transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 text-black"
                        : "text-gray-400 group-hover:text-black"
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
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative BG blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-teal-200/20 rounded-full blur-3xl animate"></div>

      {/* Animation styles */}
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
