// import React, { useEffect, useState } from "react";
import Marquee from "./Marquee";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

export default function Testimonials() {
  // 🔥 Track scroll progress
  // const [scrollProgress, setScrollProgress] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  //     const progress = (scrollTop / docHeight) * 100;
  //     setScrollProgress(progress);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const testimonials = [
    {
      name: "Jill",
      username: "@jill",
      text: "I don't know what to say. I'm speechless. This is amazing.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John",
      username: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane",
      username: "@jane",
      text: "Never seen anything like this before. It's amazing.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Jenny",
      username: "@jenny",
      text: "Wow! This blew my mind. Exactly what I needed.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "James",
      username: "@james",
      text: "This is incredible. So smooth and well designed.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(2);

  return (
    <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-gradient-to-br from-[#050a17] via-[#081a2b] to-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="relative mb-12">
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl font-extrabold text-center
              bg-gradient-to-r from-teal-400 via-cyan-300 to-white
              bg-clip-text text-transparent
              animate-[gradientShift_8s_linear_infinite]
              drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]
            "
          >
            What People Are Saying
          </h2>
          {/* Scroll progress indicator */}
          {/* <div className="relative h-2 mt-6 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div> */}
        </div>

        <div className="relative">
          {/* FIRST MARQUEE */}
          <Marquee speed={30} pauseOnHover>
            {firstRow.map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] mx-3 mb-6 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div
                  className="
                    group bg-gradient-to-br from-gray-800/80 to-gray-900/70 backdrop-blur-md border border-cyan-500/20
                    rounded-2xl p-5 sm:p-6
                    shadow-[0_0_20px_rgba(0,0,0,0.6)]
                    transition-all duration-300
                    hover:border-teal-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                    hover:scale-[1.03]
                  "
                >
                  {/* <FaQuoteLeft className="text-teal-400 text-2xl mb-3" /> */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="
                        w-12 h-12 rounded-full overflow-hidden
                        relative flex-shrink-0
                        transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                        before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-teal-400 before:via-cyan-400 before:to-purple-500 before:-z-10
                      "
                      style={{ boxShadow: "0 0 15px rgba(34,211,238,0.4)" }}
                    >
                      <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white flex items-center gap-1">
                        {t.name}
                        <FaCheckCircle className="text-teal-400 text-sm" title="Verified User" />
                      </p>
                      <p className="text-sm text-gray-400">{t.username}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={`text-lg ${idx < t.rating ? "text-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{t.text}</p>
                </div>
              </div>
            ))}
          </Marquee>

          {/* SECOND MARQUEE */}
          <Marquee speed={20} pauseOnHover reverse>
            {secondRow.map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] mx-3 mb-6 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div
                  className="
                    group bg-gradient-to-br from-gray-800/80 to-gray-900/70 backdrop-blur-md border border-purple-400/20
                    rounded-2xl p-5 sm:p-6
                    shadow-[0_0_20px_rgba(0,0,0,0.6)]
                    transition-all duration-300
                    hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
                    hover:scale-[1.03]
                  "
                >
                  {/* <FaQuoteLeft className="text-purple-400 text-2xl mb-3" /> */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="
                        w-12 h-12 rounded-full overflow-hidden
                        relative flex-shrink-0
                        transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6
                        before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-purple-400 before:via-teal-400 before:to-cyan-400 before:-z-10
                      "
                      style={{ boxShadow: "0 0 15px rgba(139,92,246,0.4)" }}
                    >
                      <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white flex items-center gap-1">
                        {t.name}
                        <FaCheckCircle className="text-purple-400 text-sm" title="Verified User" />
                      </p>
                      <p className="text-sm text-gray-400">{t.username}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={`text-lg ${idx < t.rating ? "text-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{t.text}</p>
                </div>
              </div>
            ))}
          </Marquee>

          {/* EDGE OVERLAYS */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050a17]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050a17]"></div>
        </div>
      </div>
    </section>
  );
}
