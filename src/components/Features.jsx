import React, { useState, useRef, useEffect } from "react";
// import { Gift, Calculator, Workflow, Shield, Tag, Bell } from "lucide-react";

const featuresData = [
  {
    // icon: <Gift className="w-10 h-10 text-teal-400" />,
    title: "Intelligent Card Recommendation Engine",
    text: "Leverages real-time transaction analytics and user-profile data to surface the optimal credit card ....more",
    details: "✨ ML models trained on anonymized spending patterns give you the best card suggestions instantly.",
  },
  {
    // icon: <Calculator className="w-10 h-10 text-purple-400" />,
    title: "Dynamic Reward & Cashback Calculator",
    text: "Instantly computes and compares benefit values across all your saved cards, presenting clear insights ....more",
    details: "✨ Compare and simulate spend scenarios in real time before making purchases.",
  },
  {
    // icon: <Workflow className="w-10 h-10 text-cyan-400" />,
    title: "Seamless Multi‑Category Workflow",
    text: "Whether you’re booking flights, dining out, or shopping online ....more",
    details: "✨ Create your own shortcuts for commonly used categories.",
  },
  {
    // icon: <Shield className="w-10 h-10 text-teal-400" />,
    title: "Secure & Centralized Card Management",
    text: "Add, edit, or remove cards in seconds; your card details are encrypted with bank-grade security ....more",
    details: "✨ SOC‑2 certified and AES‑256 encryption protects your sensitive data.",
  },
  {
    // icon: <Tag className="w-10 h-10 text-purple-400" />,
    title: "One‑Tap Partner Offers Access",
    text: "Unlock exclusive bank‑ and merchant‑partner promotions with a single tap ....more",
    details: "✨ Offers sync live from partner APIs with instant updates.",
  },
  {
    // icon: <Bell className="w-10 h-10 text-cyan-400" />,
    title: "Automated Validity & Eligibility Alerts",
    text: "Stay ahead of expiry and minimum‑spend conditions with proactive notifications ....more",
    details: "✨ Set custom alerts via email or push notifications.",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);

  // ✅ Click outside to close logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideAnyCard = cardsRef.current.some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!clickedInsideAnyCard) {
        setActiveIndex(null); // close all
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="features"
      className="relative bg-white pt-24 sm:pt-28 md:pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-12">
          ✨ Key Features
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((f, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`
                  feature-card relative cursor-pointer rounded-2xl overflow-hidden 
                  ${isActive ? "border-black" : "border-gray-700"} 
                bg-white/90
                  p-6 sm:p-8
                  transform transition-all duration-500 ease-out
                  hover:scale-[1.03] 
                  hover:shadow-[0_0_10px_rgba(34,211,238,0.3),0_10px_10px_rgba(0,0,0,0.6)]
                  ${isActive ? "scale-105 shadow-[0_0_10px_rgba(34,211,238,0.6),0_20px_20px_rgba(0,0,0,0.7)]" : ""}
                `}
              >
                <div className="mb-4">{f.icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold bg-black bg-clip-text text-transparent mb-3">
                  {f.title}
                </h2>
                <p className="text-black text-sm sm:text-base leading-relaxed mb-3">
                  {f.text}
                </p>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 max-h-40 mt-2"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-black text-sm sm:text-base">
                    {f.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
