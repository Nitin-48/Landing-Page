import React, { useEffect, useState, useRef } from "react";
import AS from "../assets/AS.svg";
import GS from "../assets/GS.png";
import AXIS from "../assets/AXIS.jpg";
import BOB from "../assets/BOB.webp";
import HDFC from "../assets/HDFC.png";
import ICICI from "../assets/ICICI.webp";
import SBI from "../assets/SBI.png";

export default function HeroInteractive() {
  const words = ["Better", "Easier", "Faster"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const moveGlow = (e) => ({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    card.style.transition = "transform 0.05s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.25s ease-in";
  };

  const cards = [AXIS, BOB, HDFC, ICICI, SBI];

  return (
    <section
      id="hero"
      className="relative min-h-screen text-white flex items-center justify-center overflow-hidden px-0 pt-24 sm:pt-0 bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.06"
            d="M0,256L40,229.3C80,203,160,149,240,144C320,139,400,181,480,208C560,235,640,245,720,245.3C800,245,880,235,960,218.7C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-[pulse_6s_infinite]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-[pulse_8s_infinite]"></div>

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-gray-400/10 to-white/5 blur-xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 6}px`,
            height: `${6 + Math.random() * 6}px`,
            animation: `float${i % 3} ${4 + Math.random() * 3}s ease-in-out infinite alternate`,
          }}
        ></div>
      ))}

      {/* ✅ FULL-WIDTH GRID SECTION */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 3xl:px-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 relative z-10">
        {/* LEFT */}
        <div className="space-y-4 sm:space-y-6 text-center md:text-left px-2">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl  font-extrabold leading-tight">
            <span className="block text-transparent bg-clip-text bg-white">Save more on every spend</span>
            <span className="block mt-2">
              Make life{" "}
              <span className="relative inline-block ml-2 w-[6ch] h-[1em] align-baseline">
                {words.map((w, i) => (
                  <span
                    key={i}
                    className={`absolute left-0 top-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-400 font-extrabold transition-opacity duration-700 ${
                      currentIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed px-2 sm:px-0">
            Spendiz helps you find the best credit card for every payment. <br />
            Earn maximum cashback, rewards & discounts — automatically, in real-time.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a href="#work">
              <img src={AS} alt="App Store" className="h-[44px] w-auto object-contain block hover:scale-110 transition-transform" />
            </a>
            <a href="#feature">
              <img src={GS} alt="Google Play" className="h-[62px] w-auto object-contain block hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT - Fan Card Rotation */}
        <div className="flex justify-center items-center px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 mt-15 w-[450px] h-full">
  <div
    className="relative w-[180px] sm:w-[600px] md:w-[250px] lg:w-[300px] xl:w-[1000px] 2xl:w-[2000px] 4xl:w-[360px] h-[150px]  md:h-[380px]
    md:-translate-x-35 lg:-translate-x-20 xl:translate-x-20 -translate-x-25"
    ref={cardRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    {cards.map((cardImage, i) => {
      const rotation = i * 8;
      const translateX = i * 6;
      const translateY = -i * 20;
      const baseZ = 10 - i;

      return (
        <div
          key={i}
          className="absolute bottom-0 right-0 transition-all duration-500 ease-in-out"
          style={{
            transformOrigin: "bottom right",
            transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`,
            zIndex: baseZ,
          }}
        >
          <div className="group relative">
            <img
              src={cardImage}
              alt={`Card ${i + 1}`}
              className="w-[180px] sm:w-[280px] md:w-[280px] lg:w-[400px] xl:w-[900px] 2xl:w-[1000px]
              border-1 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out 
              group-hover:z-50 group-hover:scale-125 group-hover:rotate-0 group-hover:translate-x-[-20%] group-hover:translate-y-[-10%]"
              style={{ transformOrigin: "center center" }}
              
            />
          </div>
        </div>
      );
    })}
  </div>
</div>

      </div>
    </section>
  );
}
