import React, { useRef, useEffect, useState } from "react";
import blackCard from "../assets/blackCard.png";
import AS from "../assets/AS.svg";
import GS from "../assets/GS.png";

export default function HeroInteractive() {
  const words = ["Better", "Secure", "Easy"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // word switching interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  // glow & tilt
  const cardRef = useRef(null);
  const [setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const moveGlow = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  },);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen text-black flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 bg-white/90"
    >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
        {/* optional SVG waves */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00ffff"
            fillOpacity="0.3"
            d="M0,256L40,229.3C80,203,160,149,240,144C320,139,400,181,480,208C560,235,640,245,720,245.3C800,245,880,235,960,218.7C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
        {/* optional SVG waves */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00ffff"
            fillOpacity="0.3"
            d="M0,256L40,229.3C80,203,160,149,240,144C320,139,400,181,480,208C560,235,640,245,720,245.3C800,245,880,235,960,218.7C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>



      {/* 🔵 Parallax blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-[pulse_6s_infinite]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-[pulse_8s_infinite]"></div>

      {/* ✨ Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-teal-400/20 to-purple-500/20 blur-xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 6}px`,
            height: `${6 + Math.random() * 6}px`,
            animation: `float${i % 3} ${4 + Math.random() * 3}s ease-in-out infinite alternate`
          }}
        ></div>
      ))}

      {/* 🔥 Cursor glow */}
      {/* <div
        className="pointer-events-none fixed w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full bg-gradient-to-br from-teal-400/10 to-purple-500/10 blur-3xl mix-blend-screen"
        style={{
          top: pos.y - 144,
          left: pos.x - 144,
          transition: "transform 0.1s ease-out",
        }}
      ></div> */}

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 relative z-10">
        {/* LEFT */}
        <div className="space-y-4 sm:space-y-6 text-center md:text-left px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500">
              Save more on every spend
            </span>
            <span className="block mt-2">
              Make life{" "}
              <span className="relative inline-block ml-2 w-[6ch] h-[1em] align-baseline">
                {words.map((w, i) => (
                  <span
                    key={i}
                    className={`absolute left-0 top-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 font-extrabold transition-opacity duration-700 ${
                      currentIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-0">
            Mobile payments made simple, safe, and efficient. <br />
            Transform your everyday transactions into something smarter, stylish, and rewarding.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 pt-6">
            <a
              href="#"
              className="px-4 sm:px-5 md:px-6 py-3 md:py-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold hover:scale-[1.05] transition-transform shadow-lg hover:shadow-teal-400/50 text-sm sm:text-base whitespace-nowrap"
            >
              Get Spendiz App
            </a>
            <a
              href="#"
              className="px-4 sm:px-5 md:px-6 py-3 md:py-2 rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Learn More
            </a>
          </div> */}

          {/* Store badges */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <img src={AS} alt="AppStore" className="h-8 sm:h-12 md:h-14 lg:h-14 w-auto object-contain" />
            <img src={GS} alt="PlayStore" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="flex justify-center md:justify-end perspective-1000 px-2 mt-8 md:mt-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            className="w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96 p-0 rounded-3xl overflow-hidden backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.3),0_25px_60px_rgba(0,0,0,0.7)] transition-transform duration-200 ease-out will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img src={blackCard} alt="Spendiz Card" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* SVG Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-gray-900"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.3"
          d="M0,160L60,160C120,160,240,160,360,186.7C480,213,600,267,720,272C840,277,960,235,1080,197.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        @keyframes float0 {0%{transform:translateY(0);}100%{transform:translateY(-20px);}}
        @keyframes float1 {0%{transform:translateY(0);}100%{transform:translateY(15px);}}
        @keyframes float2 {0%{transform:translateY(0);}100%{transform:translateY(-10px);}}
        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
