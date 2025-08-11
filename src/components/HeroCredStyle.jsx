import React from "react";
import Spline from "@splinetool/react-spline";

const HeroCredStyle = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Do more with <br className="hidden sm:block" /> your credit cards
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-[90%] mx-auto lg:mx-0">
            Manage your credit cards better and improve your credit score: receive payment reminders,
            uncover hidden fees, get spending insights, and discover ways to maximize card benefits.
          </p>
          <button className="mt-4 px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
            Download Spendiz
          </button>
        </div>

        {/* RIGHT: 3D SPLINE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Spline scene="https://prod.spline.design/LSuUDSjcksUWWwHw/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCredStyle;
