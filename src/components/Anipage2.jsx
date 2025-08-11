import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

const SPACER_VH = 250; // kitni der tak yeh section pinned rahe (>=120vh rakho)
const BADGE_SAFE = window.innerWidth < 640 ? 96 : 84;


export default function Anipage2() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0); // 0 → 1 within this section

  // Section visible hote hi Spline mount
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => setIsVisible(e.isIntersecting),
      { threshold: 0.25 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Scroll progress (agar baad me tum animation se tie karna chaho)
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const docTop = el.getBoundingClientRect().top;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-docTop, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const BADGE_SAFE = 0;   // px: Spline badge ke liye bottom gap (mobile pe 96 try)
  const FADE_HEIGHT = '30vh'; // kitna upar tak fade chahiye

  return (
    <section
      ref={sectionRef}
      style={{ height: `calc(${SPACER_VH}vh)` }}
      className="relative bg-black text-white"
      id="hero-3d"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Heading */}
        <h2
          className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 z-10
                text-3xl sm:text-5xl md:text-6xl font-bold text-center"
          style={{ opacity: 1 - progress * 1.2 }}
        >
          Your Spendiz Experience
        </h2>

        {/* Spline full-cover */}
        <div className="absolute inset-0">
          {isVisible && (
            <Spline
              scene="https://prod.spline.design/IlErfkGH272cMV1J/scene.splinecode"
              className="absolute inset-0 w-full h-full !min-h-0 !max-h-none"
            />
          )}

        </div>

          {/* ⬇️ Bottom fade overlay (badge-safe) */}
        <div
          className="pointer-events-none absolute left-0 right-0 z-20"
          style={{
            bottom: `${BADGE_SAFE}px`,
            height: FADE_HEIGHT,

            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.96) 85%)",
          }}
        />
      </div>

    
    </section>
  );
}
