import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Marquee from './Marquee';
import { FaCheckCircle } from 'react-icons/fa';

const Investors = () => {
  const investors = [
    {
      name: 'Rohit Mehta',
      role: 'Angel Investor',
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    },
    {
      name: 'Ananya Verma',
      role: 'Seed Partner',
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: 'Kunal Singh',
      role: 'VC Advisor',
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    },
  ];

  const firstRow = investors.slice(0, 3);

  return (
    <section className="relative px-4 sm:px-6 md:px-8 py-20 bg-white text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400">
          Our Investors
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Meet our strategic backers who believe in Spendiz.
        </p>
      </div>

      <div className="relative">
        {/* FIRST MARQUEE */}
        <Marquee speed={30} pauseOnHover>
          {firstRow.map((inv, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[350px] md:min-w-[400px] mx-3 mb-6 animate-fadeInUp"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="group flex justify-center bg-gradient-to-br from-gray-800/80 to-gray-900/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4 sm:p-6 shadow-[0_0_20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-teal-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.03]">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative flex-shrink-0 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-teal-400 before:via-cyan-400 before:to-purple-500 before:-z-10" style={{ boxShadow: "0 0 15px rgba(34,211,238,0.4)" }}>
                    <img src={inv.image} alt={inv.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg sm:text-2xl flex items-center gap-1">
                      {inv.name}
                      <FaCheckCircle className="text-teal-400 text-sm sm:text-base" title="Verified" />
                    </p>
                    <p className="text-gray-400 text-sm sm:text-lg">{inv.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        {/* GRADIENT EDGES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white"></div>
      </div>
    </section>
  );
};

export default Investors;
