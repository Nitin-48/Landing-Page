import React, { useEffect, } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Features from "./components/features";
import About from "./components/about";
import Work from "./components/work";
import Testimonials from "./components/testimonials";
import Team from "./components/team";
import Plans from "./components/plans";
// import Security from "./components/Security";
import Investors from "./components/investors";
import Contact from "./components/contact";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import HeroCredStyle from './components/HeroCredStyle';
// import Anipage1 from "./components/anipage1";
// import Anipage2 from "./components/Anipage2";
import LandingSections from "./components/LandingSections";

// ✅ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // const [pos, setPos] = useState({ x: -9999, y: -9999 });

  // ✅ Mouse glow tracking
  // useEffect(() => {
  //   const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
  //   window.addEventListener("mousemove", handleMove);
  //   return () => window.removeEventListener("mousemove", handleMove);
  // }, []);

  // ✅ Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once per element
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen font-sans scroll-smooth relative bg-black">
      {/* 🔹 Glow element that follows cursor */}
      {/* <div
        className="pointer-events-none fixed w-72 h-72 rounded-full
        bg-gradient-to-br from-pink-500/10 to-teal-500/10 blur-3xl mix-blend-screen z-[9999]"
        style={{
          top: pos.y - 144,
          left: pos.x - 144,
          transition: "transform 0.1s ease-out",
        }}
      ></div> */}

      {/* 🔹 Main Content */}
      <div className="relative z-10">
        {/* <LandingSections /> */}
        <Navbar />

        <section id="hero">
          <Hero />
        </section>
        {/* <Anipage1 /> */}

        

          {/* <HeroCredStyle /> */}


        <section id="about" data-aos="fade-up">
          <About />
        </section>
        
        <section id="feature" data-aos="fade-up">
          <Features />
        </section>
        
        {/* <Anipage2 /> */}

        <section id="work" data-aos="fade-up">
          <Work />
        </section>


        <section id="plans" data-aos="fade-up">
          <Plans />
        </section>
        
        <section id="Team" data-aos="fade-up">
          <Team />
        </section>

        <section id="testimonials" data-aos="fade-up">
          <Testimonials />
        </section>

        <section id="faq" data-aos="fade-up">
          <FAQ />
        </section>

        <section id="investors" data-aos="fade-up">
          <Investors />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>

          {/* <section id="contact" data-aos="fade-up">
        <Footer1 />
        </section> */}

        <Footer />
      </div>
    </div>
  );
}
