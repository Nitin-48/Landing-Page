import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import AS from "../assets/AS.svg";
import GS from "../assets/GS.png";

export default function HeroInteractive() {
  const words = ["Better", "Easier", "Faster"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const moveGlow = (e) => ({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white overflow-hidden px-0 pt-24 sm:pt-0 flex"
    >
      {/* background bits (unchanged) */}
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
          />
        ))}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.06"
            d="M0,256L40,229.3C80,203,160,149,240,144C320,139,400,181,480,208C560,235,640,245,720,245.3C800,245,880,235,960,218.7C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 3xl:px-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 relative z-10">
        {/* LEFT */}
        <div className="order-1 space-y-4 sm:space-y-6 text-center md:text-left px-2 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-transparent bg-clip-text bg-white">
              Save more on every spend
            </span>
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

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <a href="#work">
              <img
                src={AS}
                alt="App Store"
                className="h-[44px] w-auto object-contain block hover:scale-110 transition-transform"
              />
            </a>
            <a href="#feature">
              <img
                src={GS}
                alt="Google Play"
                className="h-[62px] w-auto object-contain block hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

       {/* RIGHT — Mobile only */}
<div className="md:hidden relative w-full mt-6">
  <div className="relative w-full h-[320px] sm:h-[380px]">
    <Spline
      scene="https://prod.spline.design/1PbkEGm7yhWUmH1m/scene.splinecode"
      className="absolute inset-0 w-full h-full"
    />
  </div>

  {/* Soft fades so edges blend on mobile */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black via-black/70 to-transparent" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black via-black/70 to-transparent" />
</div>

{/* RIGHT — Tablet/Laptop exactly as before */}
<div className="hidden md:block absolute inset-0 h-screen w-screen translate-x-40 -translate-y-0 z-0">
  <Spline
    scene="https://prod.spline.design/1PbkEGm7yhWUmH1m/scene.splinecode"
    className="w-screen h-screen"
  />
</div>

      </div>
    </section>
  );
}
