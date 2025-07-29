import React, { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";

export default function TeamSection() {
  const team = [
    {
      name: "Bonnie Green",
      role: "CEO / Co‑founder",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      bio: "Bonnie drives the technical strategy of the Spendiz platform and brand.",
      tags: ["10+ Years Experience", "Featured in Forbes"]
    },
    {
      name: "Roberta Casas",
      role: "CTO / Co‑founder",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      bio: "Roberta crafts strategies that power the platform’s growth and security.",
      tags: ["Security Expert", "Women in Tech Award"]
    },
    {
      name: "Jese Leos",
      role: "Lead Designer",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      bio: "Jese brings aesthetics to life, shaping every user interaction visually.",
      tags: ["Behance Featured", "10k+ Designs Delivered"]
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );
    const refs = cardRefs.current.slice();
    refs.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      refs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = card => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section className="relative bg-gradient-to-br from-[#050a17] via-[#081a2b] to-[#0f172a] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT TEXT — vertically centered */}
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400">
                people
              </span>{" "}
              make us great
            </h2>
            <p className="text-gray-300 mb-4 text-lg">
              We thrive on technology, innovation and passion that unlock long‑term value.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Join us and you’ll work with incredible minds, tackle bold challenges,
              and have fun while you’re at it. Together we push boundaries, build
              something meaningful, and make lifelong connections.
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="
                opacity-0 translate-y-10 transition-all duration-700 ease-out
                group relative flex flex-col md:flex-row md:items-center gap-6
                rounded-2xl bg-gray-800/50 backdrop-blur-md p-6
                border border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.5)]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                hover:border-teal-400/50
                will-change-transform
              "
              onMouseMove={(e) => handleMouseMove(e, cardRefs.current[idx])}
              onMouseLeave={() => handleMouseLeave(cardRefs.current[idx])}
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-cyan-400/30 group-hover:ring-teal-400/50 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-xl animate-pulse"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-cyan-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-teal-400/20 to-purple-400/20 border border-teal-400/40 text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  {[FaFacebookF, FaGithub, FaTwitter, FaDribbble].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="hover:text-teal-400 transition-transform transform hover:scale-125"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
