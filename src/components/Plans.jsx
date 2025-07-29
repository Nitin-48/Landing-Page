import React, { useState, useEffect, useRef } from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";

const Plans = () => {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("INR");
  const cardRefs = useRef([]);

  // 🔥 Tilt effect
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };
  const resetTilt = (index) => {
    const card = cardRefs.current[index];
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  // 🔥 fade-up animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((card) => card && observer.observe(card));
  }, []);

  return (
    <section
      id="pricing"
      className="relative py-20 px-4 bg-gradient-to-b from-[#050a17] via-gray-800 to-[#050a17] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          Pricing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500">
            &amp; Plans
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Choose the plan that matches your vibe. Whether you’re just exploring
          or ready to go all‑in, we’ve got you.
        </p>

        {/* Toggles */}
        <div className="flex justify-center gap-4 mb-2 flex-wrap">
          <div className="flex bg-gray-900/50 p-1 rounded-full backdrop-blur-md">
            {["monthly", "yearly"].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billing === b
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {b === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
          <div className="flex bg-gray-900/50 p-1 rounded-full backdrop-blur-md mb-0">
            {["INR", "USD"].map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  currency === c
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-black"
                    : "text-white hover:text-pink-300"
                }`}
              >
                {c === "INR" ? "₹ INR" : "$ USD"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={() => resetTilt(0)}
            className="opacity-0 translate-y-10"
          >
            <div className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 transition-transform duration-500">
              <div className="rounded-3xl bg-gray-800/50 backdrop-blur-md p-8 h-full w-full">
                <div className="absolute top-4 right-4 text-xs uppercase tracking-widest font-semibold text-teal-400">
                  Free Forever
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                  Free Tier
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Unlock Spendiz’s core benefits at no cost:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-cyan-400 mt-1" />
                    <span>
                      <strong className="text-white">Unlimited Card Connections:</strong>{" "}
                      Add as many credit cards as you like.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-cyan-400 mt-1" />
                    <span>
                      <strong className="text-white">Basic Category Matching:</strong>{" "}
                      Instant recos for Shopping, Dining, Entertainment.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-cyan-400 mt-1" />
                    <span>
                      <strong className="text-white">Simple Savings Estimates:</strong>{" "}
                      Projected cashback & points per spend.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-cyan-400 mt-1" />
                    <span>
                      <strong className="text-white">Secure Data Vault:</strong>{" "}
                      Industry-standard encryption & tokenization.
                    </span>
                  </li>
                </ul>
                <button
                  className="
                    w-full py-3 px-6 font-semibold text-white rounded-full
                    bg-gradient-to-r from-cyan-500 to-teal-500
                    hover:from-teal-500 hover:to-cyan-400
                    transition-all duration-300
                    shadow-lg hover:shadow-cyan-400/50 relative overflow-hidden
                  "
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>

          {/* Premium Tier */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={() => resetTilt(1)}
            className="opacity-0 translate-y-10"
          >
            <div className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-transform duration-500">
              <div className="rounded-3xl bg-gradient-to-br from-purple-900/70 to-pink-900/40 backdrop-blur-md p-8 h-full w-full relative overflow-hidden">
                {/* Animated sparkles */}
                <div className="absolute top-2 right-2 animate-ping w-3 h-3 bg-pink-400 rounded-full"></div>
                <div className="absolute bottom-2 left-2 animate-ping w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute top-4 right-4 text-xs uppercase tracking-widest font-semibold text-pink-400">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-300">
                  Premium Tier
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Elevate your Spendiz experience with advanced insights:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-pink-400 mt-1" />
                    <span>
                      <strong className="text-white">Advanced Analytics Dashboard:</strong>{" "}
                      Interactive charts & insights.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-pink-400 mt-1" />
                    <span>
                      <strong className="text-white">Custom Alerts & Reminders:</strong>{" "}
                      Real-time notifications for promos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-pink-400 mt-1" />
                    <span>
                      <strong className="text-white">Priority Support:</strong>{" "}
                      Fast-track help with dedicated response times.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-pink-400 mt-1" />
                    <span>
                      <strong className="text-white">Family & Team Sharing:</strong>{" "}
                      Share access with up to 5 members.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiOutlineBadgeCheck className="text-pink-400 mt-1" />
                    <span>
                      <strong className="text-white">Early Feature Access:</strong>{" "}
                      Try AI-powered spend forecasting first.
                    </span>
                  </li>
                </ul>
                <button
                  className="
                    w-full py-3 px-6 font-semibold text-white rounded-full
                    bg-gradient-to-r from-pink-500 to-purple-500
                    hover:from-purple-500 hover:to-indigo-500
                    transition-all duration-300
                    shadow-lg hover:shadow-pink-500/50 relative overflow-hidden
                  "
                >
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400">
                <th className="p-4">Feature</th>
                <th className="p-4 text-cyan-400">Free</th>
                <th className="p-4 text-pink-400">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="p-4">Unlimited Cards</td>
                <td className="p-4"><FaCheck className="text-cyan-400" /></td>
                <td className="p-4"><FaCheck className="text-pink-400" /></td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">Custom Alerts</td>
                <td className="p-4"><FaTimes className="text-red-500" /></td>
                <td className="p-4"><FaCheck className="text-pink-400" /></td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-4">Advanced Dashboard</td>
                <td className="p-4"><FaTimes className="text-red-500" /></td>
                <td className="p-4"><FaCheck className="text-pink-400" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Parallax blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Plans;
