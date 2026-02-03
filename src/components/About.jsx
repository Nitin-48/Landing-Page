import React, { useEffect} from 'react';
// import React, { useRef, useState } from 'react';
// import Spline from '@splinetool/react-spline';
import AOS from "aos";
import "aos/dist/aos.css";

// 📦 Assets
import illu from "../assets/illu.svg";
// import coin from "../assets/coin.jpeg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  // const containerRef = useRef(null);
  //   const [isVisible, setIsVisible] = useState(false);
  
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           setIsVisible(true);
  //         }
  //       },
  //       { threshold: 0.5 } // Slightly lower to trigger earlier
  //     );
  
  //     const current = containerRef.current;
  //     if (current) observer.observe(current);
  
  //     return () => {
  //       if (current) observer.unobserve(current);
  //     };
  //   }, []);

  return (
    <section
      id="whatwedo"
      className="relative bg-black text-white py-0 px-4 sm:px-8 lg:px-20"
    >
      <h1 className="text-center text-5xl sm:text-6xl font-bold pb-10 pt-0">What we do</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <div className='lg:translate-y-[-60px] "space-y-10" data-aos="fade-right"'>
          
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              Simplify every spend with
              <span className="block text-gray-300">Spendiz</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Every spend is a guessing game. Multiple cards, apps, and payment modes lead to <strong>missed cashback, expired offers, and lost reward points — up to 70% of savings gone</strong>.
            </p>

          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Built for smart spenders</h3>
            <p className="text-gray-400 text-md">
              <strong>Spendiz</strong> solves this with a live offer database, <strong>AI-driven matching</strong>, and real-time calculations — helping you pick the best card instantly and never miss a benefit again.
            </p>

            <div className="pt-10">
              <a
                href="#"
                className="inline-block bg-black text-white border-2 b font-semibold px-6 py-4 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                Try Spendiz Now
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
{/* <div
  ref={containerRef}
  className="relative w-full h-[420px] md:h-[500px] xl:h-[560px] 2xl:h-[620px]"
  data-aos="zoom-in"
>

        {isVisible && (
          <Spline
            scene="https://prod.spline.design/7ckfdNYPpwXCdjMm/scene.splinecode"
            className="absolute inset-0 w-full h-full !min-h-0 !max-h-none"
          />
        )}
      </div> */}







<div
  className="relative w-full h-[320px] md:h-[360px] lg:h-[640px] xl:h-[60%vh] 2xl:h-[900px] flex items-center justify-center overflow-visible"
  data-aos="zoom-in"
>
  <img
    src={illu}
    alt="Spendiz Cards Demo"
    className="
      /* 📱/📟 unchanged: centered */
      block mx-auto h-full w-auto object-contain
      sm:max-w-[420px] md:max-w-[480px]

      rounded-xl rounded-bl-[60px] rounded-br-[60px] rounded-tr-[60px] rounded-tl-[60px]
      shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105

      /* 💻 & up: much larger + thoda left */
      lg:absolute lg:mx-0 lg:h-auto lg:w-[640px] lg:left-[-80px] lg:top-[20px]
      xl:w-[820px] xl:left-[120px] xl:top-[90px]
      2xl:w-[980px] 2xl:left-[-160px]
    "
  />
</div>






      </div>
    </section>
  );
}
