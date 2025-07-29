import React, { useState, useEffect } from "react";
import { Gift, Calculator, Workflow, Shield, Tag, Bell, Star, Zap } from "lucide-react";

// 🎨 Feature data with icons
const featuresData = [
  {
    // icon: <Gift className="w-10 h-10 text-teal-400" />,
    title: "Intelligent Card Recommendation Engine",
    text:
      "Leverages real-time transaction analytics and user-profile data to surface the optimal credit card for each spend category—maximizing cashback, reward points, or travel perks with zero manual effort.",
    details:
      "✨ ML models trained on anonymized spending patterns give you the best card suggestions instantly."
  },
  {
    // icon: <Calculator className="w-10 h-10 text-purple-400" />,
    title: "Dynamic Reward & Cashback Calculator",
    text:
      "Instantly computes and compares benefit values across all your saved cards, presenting clear ₹‑equivalent insights so you always choose the card that delivers the greatest return.",
    details:
      "✨ Compare and simulate spend scenarios in real time before making purchases."
  },
  {
    // icon: <Workflow className="w-10 h-10 text-cyan-400" />,
    title: "Seamless Multi‑Category Workflow",
    text:
      "Whether you’re booking flights, dining out, or shopping online, Spendiz adapts its UI flow—dynamically showing only relevant fields and hiding unnecessary options.",
    details:
      "✨ Create your own shortcuts for commonly used categories."
  },
  {
    icon: <Shield className="w-10 h-10 text-teal-400" />,
    title: "Secure & Centralized Card Management",
    text:
      "Add, edit, or remove cards in seconds; your card details are encrypted with bank-grade security.",
    details:
      "✨ SOC‑2 certified and AES‑256 encryption protects your sensitive data."
  },
  {
    icon: <Tag className="w-10 h-10 text-purple-400" />,
    title: "One‑Tap Partner Offers Access",
    text:
      "Unlock exclusive bank‑ and merchant‑partner promotions with a single tap.",
    details:
      "✨ Offers sync live from partner APIs with instant updates."
  },
  {
    icon: <Bell className="w-10 h-10 text-cyan-400" />,
    title: "Automated Validity & Eligibility Alerts",
    text:
      "Stay ahead of expiry and minimum‑spend conditions with proactive notifications.",
    details:
      "✨ Set custom alerts via email or push notifications."
  },
  {
    icon: <Star className="w-10 h-10 text-teal-400" />,
    title: "Extra Benefit Card Example",
    text: "You can add more descriptions here as needed.",
    details: "✨ Placeholder detail text for extra features."
  },
  {
    icon: <Zap className="w-10 h-10 text-purple-400" />,
    title: "Final Card Example",
    text: "Whether you’re booking flights, dining out, or shopping online…",
    details: "✨ Final example feature details for demonstration."
  }
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null);

  // ✨ Animate on scroll
  useEffect(() => {
    const revealOnScroll = () => {
      const cards = document.querySelectorAll(".feature-card");
      const windowHeight = window.innerHeight;

      cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          card.classList.add("opacity-100", "translate-y-0");
          card.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="features"
      className="relative bg-gradient-to-br from-gray-950 via-[#081a2b] to-[#0f172a] pt-24 sm:pt-28 md:pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1
          className="
            text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold tracking-tight
            bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300
            bg-clip-text text-transparent
            animate-[gradientShift_8s_linear_infinite]
            drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]
            mb-12
          "
        >
          ✨ Key Features
        </h1>

        {/* Grid of features */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((f, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                onClick={() => handleCardClick(i)}
                className={`
                  feature-card relative cursor-pointer rounded-2xl overflow-hidden 
                  border ${isActive ? "border-cyan-400" : "border-gray-700"} 
                  backdrop-blur-md bg-gray-800/70
                  p-6 sm:p-8
                  transform transition-all duration-500 ease-out
                  opacity-0 translate-y-10
                  hover:scale-[1.03] hover:border-cyan-400/40
                  shadow-[0_0_20px_rgba(34,211,238,0.3),0_15px_30px_rgba(0,0,0,0.6)]
                  ${isActive ? "scale-105 shadow-[0_0_35px_rgba(34,211,238,0.6),0_25px_50px_rgba(0,0,0,0.7)]" : ""}
                `}
              >
                <div className="mb-4">{f.icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-3">
                  {f.title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                  {f.text}
                </p>

                {/* Details overlay */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 max-h-40 mt-2"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-200 text-sm sm:text-base">{f.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
