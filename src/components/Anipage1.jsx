import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const Spendiz3DHero = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }

    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center px-6 sm:px-10"
    >
      {/* Headline Content */}
      <div className="z-20 text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Maximize Every Spend <br /> with <span className="text-gray-300">Spendiz</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-400 mx-auto text-base sm:text-lg">
          Unlock hidden savings, match real-time offers, and use the perfect card — every time. Spendiz makes every transaction smarter, smoother, and rewarding.
        </p>
        <button className="mt-8 px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition font-medium">
          Get Started for Free
        </button>
      </div>

      {/* 3D Model */}
<div className="w-full px-4 sm:px-10 flex justify-center items-center">
  <div className="w-full max-w-[1440px] h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] relative">
    {isVisible && (
      <Spline
        scene="https://prod.spline.design/7ckfdNYPpwXCdjMm/scene.splinecode"
        className="absolute inset-0 w-full h-full !min-h-0 !max-h-none"
      />
    )}
  </div>
</div>

      {/* Glow Circle or Decoration */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />
    </section>
  );
};

export default Spendiz3DHero;
