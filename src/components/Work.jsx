import React, { useEffect, useState } from "react";
import { FaCreditCard, FaLayerGroup, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Add Your Cards",
    text: "Securely connect to your bank or manually enter your credit-card details in just a few taps. All data is encrypted end-to-end—Spendiz only stores the last four digits needed for matching.",
    icon: <FaCreditCard className="text-white text-3xl sm:text-4xl" />,
    glow: "from-teal-400 to-cyan-500",
  },
  {
    title: "Choose a Spend Category",
    text: 'Select the type of purchase you are about to make—Shopping, Travel, Dining, Entertainment, or any of our 15+ built-in categories. Drill down further with subcategories like "Flight Tickets" or "Gourmet Dining."',
    icon: <FaLayerGroup className="text-white text-3xl sm:text-4xl" />,
    glow: "from-purple-400 to-pink-500",
  },
  {
    title: "See Your Best Card",
    text: "Instantly view your top card recommendation alongside an estimated savings breakdown. We calculate reward rates, cashback caps, and minimum-spend requirements in real time—so you know exactly what you will save.",
    icon: <FaCheckCircle className="text-white text-3xl sm:text-4xl" />,
    glow: "from-yellow-400 to-orange-500",
  },
];

export default function Work() {
  const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getCardDimensions = () => {
    if (typeof window === "undefined") return { width: 320, gap: 60 };
    const w = window.innerWidth;
    if (w < 480) return { width: 280, gap: 40 };
    if (w < 768) return { width: 320, gap: 60 };
    if (w < 1024) return { width: 340, gap: 80 };
    return { width: 360, gap: 100 };
  };
  const { width: cardWidth, gap } = getCardDimensions();

const getTransform = (i) => {
  if (isMobile) {
    if (phase === i) return "translateY(0)";
    if (i < phase) return "translateY(-200%)"; // move up
    return "translateY(200%)"; // move down
  }

  // 💻 Desktop logic remains same...
  if (phase === 0) return i === 0 ? "translateX(0)" : "translateX(200%)";
  if (phase === 1) {
    if (i === 0) return `translateX(-${(cardWidth + gap) / 2}px)`;
    if (i === 1) return `translateX(${(cardWidth + gap) / 2}px)`;
    return "translateX(200%)";
  }
  if (phase === 2) {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      if (i === 0) return "translateX(-200%)";
      if (i === 1) return `translateX(-${(cardWidth + gap) / 2}px)`;
      if (i === 2) return `translateX(${(cardWidth + gap) / 2}px)`;
    }
    if (i === 0) return `translateX(-${cardWidth + gap}px)`;
    if (i === 1) return `translateX(0)`;
    if (i === 2) return `translateX(${cardWidth + gap}px)`;
  }
  return "translateX(200%)";
};


const getOpacity = (i) => {
  if (isMobile) {
    return phase === i ? 1 : 0; // ✅ Only current phase card visible
  }

  // 💻 Desktop logic
  if (phase === 0) return i === 0 ? 1 : 0;
  if (phase === 1) return i === 0 || i === 1 ? 1 : 0;
  if (phase === 2) {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      return i === 1 || i === 2 ? 1 : 0;
    }
    return 1;
  }
  return 0;
};


  const getZIndex = (i) => {
    if (isMobile) {
      if (phase === 1) return i === 1 ? 10 : 5;
      if (phase === 2) {
        if (i === 2) return 20;
        if (i === 1) return 10;
        return 5;
      }
    }
    return 1;
  };

  return (
    <section
      className="
        relative 
        min-h-screen
        text-white
        py-12 sm:py-16 lg:py-6 
        px-4
        overflow-hidden
      "
      // style={{
      //   background:
      //     "radial-gradient(circle at top left, rgba(20,184,166,0.12), transparent 50%), radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 50%), #050a17",
      // }}
      id="work"
    >
      {/* Floating glow shapes */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-500/10 blur-2xl animate-pulse"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              top: ["10%", "70%", "30%", "50%", "85%", "40%"][i],
              left: ["15%", "75%", "55%", "35%", "80%", "60%"][i],
            }}
          />
        ))}
      </div> */}

      {/* Heading */}
      <h2
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          text-center font-extrabold leading-tight mb-0 sm:mb-14 md:mb-10
          bg-[length:200%_200%] bg-gradient-to-r from-black to-gray-400
          bg-clip-text text-transparent animate-[gradientShift_8s_linear_infinite]
          drop-shadow-md
        "
        data-aos="fade-up"
      >
        How it Works
      </h2>

      {/* Cards container */}
      <div
        className="relative flex justify-center items-center w-full min-h-[500px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {steps.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-2xl p-5 sm:p-6 lg:p-4 flex flex-col items-center text-center
              bg-black border-2
              shadow-[0_0_0.5px_rgba(34,211,238,0.25),0_0.5px_0.5px_rgba(0,0,0,0.6)]
              hover:shadow-[0_0_10px_rgba(34,211,238,0.5),0_10px_10px_rgba(0,0,0,0.7)]
              hover:border-black-400/20 transition-all duration-700 ease-out
              space-y-3 sm:space-y-4 backdrop-blur-md"
          style={{
  width: `${cardWidth}px`,
  transform: getTransform(i),
  opacity: getOpacity(i),
  zIndex: getZIndex(i),
  transition: "transform 0.7s ease, opacity 0.7s ease", // ✅ smooth motion
  margin: isMobile ? "0 auto" : undefined, // ✅ center on mobile
}}


          >
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 sm:mb-5 rounded-xl bg-gradient-to-br ${s.glow} shadow-lg shadow-cyan-500/40 flex items-center justify-center`}
            >
              {s.icon}
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold px-2">
              {s.title}
            </h3>
            <p className="text-white/95 text-left text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              {s.text}
            </p>
          </div>
        ))}
      </div>

      {/* Step controls */}
      <div className="w-full flex justify-center">
  <div
    className="z-20 mt-0 sm:mt-10 flex flex-wrap justify-center gap-2 bg-black/80 rounded-full w-fit p-2 backdrop-blur-md border border-gray-700 shadow-inner shadow-black/30 sticky bottom-4"
    data-aos="fade-up"
  >
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setPhase(i)}
            className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              phase === i
                ? "bg-gradient-to-r from-white to-white text-black shadow-[0_0_10px_black]"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            Step {i + 1}
          </button>
        ))}
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
