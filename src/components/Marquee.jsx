// components/Marquee.jsx
import React from "react";

export default function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  reverse = false,
}) {
  return (
    <div className="relative overflow-hidden group">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children /* duplicated for seamless loop */}
      </div>

      {/* Pause on hover */}
      {pauseOnHover && (
        <style>{`
          .group:hover .animate-marquee,
          .group:hover .animate-marquee-reverse {
            animation-play-state: paused;
          }
        `}</style>
      )}

      {/* Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
      `}</style>
    </div>
  );
}
