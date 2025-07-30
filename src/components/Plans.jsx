import React, { useState, useEffect, useRef } from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";

const Plans = () => {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("INR");
  const cardRefs = useRef([]);

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
    <section id="pricing" className="relative py-20 px-4 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          Pricing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            &amp; Plans
          </span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Choose the plan that matches your vibe. Whether you’re just exploring or ready to go all‑in, we’ve got you.
        </p>

        {/* Toggles */}
        <div className="flex justify-center gap-4 mb-2 flex-wrap">
          <div className="flex bg-gray-200 p-1 rounded-full">
            {["monthly", "yearly"].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billing === b
                    ? "bg-black text-white"
                    : "text-black hover:text-gray-700"
                }`}
              >
                {b === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
          <div className="flex bg-gray-200 p-1 rounded-full">
            {["INR", "USD"].map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  currency === c
                    ? "bg-black text-white"
                    : "text-black hover:text-gray-700"
                }`}
              >
                {c === "INR" ? "₹ INR" : "$ USD"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Free Tier */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={() => resetTilt(0)}
            className="opacity-0 translate-y-10"
          >
            <div className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-gray-400 to-gray-200">
              <div className="rounded-3xl bg-white p-8 h-full w-full">
                <div className="absolute top-4 right-4 text-xs uppercase tracking-widest font-semibold text-gray-500">
                  Free Forever
                </div>
                <h3 className="text-2xl font-bold mb-4">Free Tier</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Unlock Spendiz’s core benefits at no cost:
                </p>
                <ul className="space-y-3 mb-8 text-sm">
                  {[
                    "Unlimited Card Connections: Add as many credit cards as you like.",
                    "Basic Category Matching: Instant recos for Shopping, Dining, Entertainment.",
                    "Simple Savings Estimates: Projected cashback & points per spend.",
                    "Secure Data Vault: Industry-standard encryption & tokenization.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-800">
                      <HiOutlineBadgeCheck className="text-black mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 font-semibold text-white rounded-full bg-black hover:bg-gray-800 transition-all duration-300 shadow-md">
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
            <div className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-gray-200 to-gray-400">
              <div className="rounded-3xl bg-white p-8 h-full w-full">
                <div className="absolute top-4 right-4 text-xs uppercase tracking-widest font-semibold text-gray-500">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium Tier</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Elevate your Spendiz experience with advanced insights:
                </p>
                <ul className="space-y-3 mb-8 text-sm">
                  {[
                    "Advanced Analytics Dashboard: Interactive charts & insights.",
                    "Custom Alerts & Reminders: Real-time notifications for promos.",
                    "Priority Support: Fast-track help with dedicated response times.",
                    "Family & Team Sharing: Share access with up to 5 members.",
                    "Early Feature Access: Try AI-powered spend forecasting first.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-800">
                      <HiOutlineBadgeCheck className="text-black mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 font-semibold text-white rounded-full bg-black hover:bg-gray-800 transition-all duration-300 shadow-md">
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
              <tr className="text-gray-500 text-sm">
                <th className="p-4">Feature</th>
                <th className="p-4 text-black">Free</th>
                <th className="p-4 text-black">Premium</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-gray-300">
                <td className="p-4">Unlimited Cards</td>
                <td className="p-4"><FaCheck className="text-black" /></td>
                <td className="p-4"><FaCheck className="text-black" /></td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4">Custom Alerts</td>
                <td className="p-4"><FaTimes className="text-red-500" /></td>
                <td className="p-4"><FaCheck className="text-black" /></td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-4">Advanced Dashboard</td>
                <td className="p-4"><FaTimes className="text-red-500" /></td>
                <td className="p-4"><FaCheck className="text-black" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Soft white glow blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>

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
