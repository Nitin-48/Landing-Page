import React, { useState, useRef, useEffect } from "react";

const featuresData = [
  {
    title: "Best Card Finder for Every Transaction",
    text: "Not sure which card to use? Spendiz picks the best one for you instantly ....more",
    details:
      "✨ Real-time logic finds the card with highest cashback, reward points, or discount — based on what you're spending on.",
  },
  {
    title: "Live Cashback & Reward Calculator",
    text: "Get exact value of what you’ll earn with each card before making a payment ....more",
    details:
      "✨ Supports real-time reward rate, cashback %, milestone logic, and brand-specific offers.",
  },
  {
    title: "Smart Nudges Before You Pay",
    text: "We alert you if another card gives you better value or if a hidden offer is applicable ....more",
    details:
      "✨ Nudges work during travel, dining, online shopping, or even at fuel stations.",
  },
  {
    title: "All Cards. One Dashboard.",
    text: "Track your cards, usage history, saved offers, and reward summary in one place ....more",
    details:
      "✨ Securely manage all your credit cards — with spend category-wise breakdowns and expiry alerts.",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideAnyCard = cardsRef.current.some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!clickedInsideAnyCard) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="features"
      className="relative bg-black pt-24 sm:pt-28 md:pt-28 pb-20 text-white"
    >
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-white bg-clip-text text-transparent mb-16">
          ✨ Key Features
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {featuresData.map((f, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`
                  group relative cursor-pointer rounded-2xl overflow-hidden
                  border ${isActive ? "border-white" : "border-gray-700"}
                  bg-white/5 backdrop-blur-md
                  p-6 sm:p-8 min-h-[260px]
                  flex flex-col justify-between
                  transform transition-all duration-500 ease-out
                  hover:scale-[1.03] 
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.2),0_10px_20px_rgba(255,255,255,0.05)]
                  ${isActive ? "scale-105 shadow-[0_0_15px_rgba(255,255,255,0.4),0_20px_30px_rgba(255,255,255,0.1)]" : ""}
                `}
              >
                <h2 className="text-xl sm:text-2xl font-bold bg-white/95 bg-clip-text text-transparent mb-3">
                  {f.title}
                </h2>

                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-3">
                  {f.text.replace("....more", "")}
                  <span className="inline-flex items-center ml-1">
                    <span className="italic text-gray-400">....more</span>
                    <span
                      className={`ml-1 inline-block transform transition-transform duration-300 ${
                        isActive ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      →
                    </span>
                  </span>
                </p>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 max-h-40 mt-2"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-400 text-sm sm:text-base">
                    {f.details}
                  </p>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 z-[-1] rounded-2xl group-hover:bg-white/5 transition duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
