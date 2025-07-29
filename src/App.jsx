import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Plans from "./components/Plans";
import Security from "./components/Security";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
// import Footer1 from "./components/Footer1";

// ✅ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // ✅ Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen font-sans scroll-smooth relative bg-[#050a17]">
      {/* 🔹 Main Content */}
      <div className="relative z-10">
        <Navbar />

        <section id="hero">
          <Hero />
        </section>

        <section id="feature" data-aos="fade-up">
          <Features />
        </section>

        <section id="work" data-aos="fade-up">
          <Work />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="plans" data-aos="fade-up">
          <Plans />
        </section>

        <section id="testimonials" data-aos="fade-up">
          <Testimonials />
        </section>

        <section id="Team" data-aos="fade-up">
          <Team />
        </section>

        <section id="security" data-aos="fade-up">
          <Security />
        </section>

        <section id="faq" data-aos="fade-up">
          <FAQ />
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
