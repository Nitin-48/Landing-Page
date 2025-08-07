import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Melissa Tatcher",
    role: "Marketing Expert",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Stuard Ferrel",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Eva Hudson",
    role: "Creative Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Jackie Sanders",
    role: "SEO Expert",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black py-12 sm:py-14 md:py-14 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-screen mx-auto text-center">
        <p className="text-teal-400 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
          Our Team Members
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 sm:mb-5">
          Our Creative Team
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          We’re the minds behind the Spendiz experience. Skilled, strategic, and always evolving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-white/10 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-3">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-400">
                {[FaFacebookF, FaGithub, FaXTwitter, FaInstagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-white transition-transform transform hover:scale-125"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
