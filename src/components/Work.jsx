import React, { useEffect, useState, useRef } from "react";
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
  const [autoCycleDone, setAutoCycleDone] = useState(false);
  const intervalRef = useRef(null);

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
    if (!autoCycleDone) {
      intervalRef.current = setInterval(() => {
        setPhase((prev) => {
          if (prev === steps.length - 1) {
            clearInterval(intervalRef.current);
            setAutoCycleDone(true);
            return prev;
          }
          return prev + 1;
        });
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoCycleDone]);

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
      if (i < phase) return "translateY(-200%)";
      return "translateY(200%)";
    }
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
    if (isMobile) return phase === i ? 1 : 0;
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
      id="work"
      className="relative max-w-screen text-white py-12 sm:py-16 lg:py-18 px-4 overflow-hidden bg-black"
    >
      {/* HEADING */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-tight mb-20 sm:mb-6 bg-white bg-clip-text text-transparent animate-[gradientShift_8s_linear_infinite]"
        data-aos="fade-up"
      >
        How it Works
      </h2>

      {/* TOOLTIP TEXT
      <p className="text-center text-sm text-gray-400 mb-6">
        👉 Tap on steps below to explore Spendiz in action
      </p> */}

      {/* CARDS */}
      <div
        className="relative flex justify-center items-center w-full min-h-[500px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {steps.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-2xl p-5 sm:p-6 lg:p-4 flex flex-col items-center text-center
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-[0_0_0.5px_rgba(255,255,255,0.15),0_0.5px_0.5px_rgba(0,0,0,0.6)]
              hover:shadow-[0_0_10px_rgba(255,255,255,0.3),0_10px_10px_rgba(0,0,0,0.7)]
              transition-all duration-700 ease-out space-y-3 sm:space-y-4"
            style={{
              width: `${cardWidth}px`,
              transform: getTransform(i),
              opacity: getOpacity(i),
              zIndex: getZIndex(i),
              transition: "transform 0.7s ease, opacity 0.7s ease",
              margin: isMobile ? "0 auto" : undefined,
            }}
          >
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 sm:mb-5 rounded-xl bg-gradient-to-br ${s.glow} shadow-lg flex items-center justify-center`}
            >
              {s.icon}
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white bg-clip-text bg-gradient-to-r from-white to-gray-300 px-2">
              {s.title}
            </h3>
            <p className="text-gray-300 text-left text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              {s.text}
            </p>
          </div>
        ))}
      </div>

      {/* CONTROLS - Moved after cards */}
      <div className="w-full flex justify-center mt-12">
        <div
          className="z-20 flex flex-wrap justify-center gap-2 bg-black/80 rounded-full w-fit p-2 backdrop-blur-md border border-gray-700 shadow-inner shadow-black/30"
          data-aos="fade-up"
        >
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setPhase(i)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                phase === i
                  ? "bg-gradient-to-r from-white to-white text-black shadow-[0_0_10px_white]"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              Step {i + 1}
              {phase === i && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-ping"></span>
              )}
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
