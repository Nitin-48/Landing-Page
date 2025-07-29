import React, { useEffect, useRef } from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import gdprBadge from "../assets/gdprBadge.jpeg";
import isoBadge from "../assets/isoBadge.jpeg";
import pciBadge from "../assets/pciBadge.jpeg";

export default function Security() {
  const cardRefs = useRef([]);

  // fade-up animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
  }, []);

  return (
    <section
      id="security-privacy"
      className="relative py-20 px-4 bg-gradient-to-b from-[#050a17] via-gray-800 to-[#050a17] text-white overflow-hidden"
    >
      {/* subtle background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* optional SVG waves */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00ffff"
            fillOpacity="0.3"
            d="M0,256L40,229.3C80,203,160,149,240,144C320,139,400,181,480,208C560,235,640,245,720,245.3C800,245,880,235,960,218.7C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          Security{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            &amp; Privacy
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Your data is sacred. We combine bank‑grade protection with the latest compliance standards
          so you can use Spendiz with total peace of mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Overview */}
          <div ref={el => (cardRefs.current[0] = el)} className="opacity-0 translate-y-10">
            <div className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-500">
              <div className="rounded-3xl bg-gray-800/60 backdrop-blur-md p-8 h-full w-full">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300 group-hover:text-cyan-400 transition-colors">
                  Overview of Data Protection
                </h3>
                <ul className="space-y-4 leading-relaxed">
                  {[
                    "End‑to‑End Encryption: AES‑256 encryption keeps your info unreadable to anyone but you.",
                    "Tokenization: We never store full card numbers—only last 4 digits remain, tokenized.",
                    "Secure Cloud Infrastructure: SOC‑2 compliant servers, 24/7 monitoring & automated threat response.",
                    "Regular Audits & Pen Tests: Quarterly audits and continuous pen tests keep us ahead.",
                    "Strict Access Controls: MFA, role‑based permissions & least‑privilege policies."
                  ].map((txt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group/item hover:text-white transition-colors"
                    >
                      <HiOutlineShieldCheck className="mt-1 text-cyan-400 text-lg flex-shrink-0 animate-pulse" />
                      <span className="hover:underline">{txt}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="
                    mt-8 py-3 px-6 rounded-full font-semibold
                    bg-gradient-to-r from-cyan-500 to-teal-500
                    hover:from-teal-500 hover:to-cyan-400
                    transition-all duration-300 shadow-lg hover:shadow-cyan-400/50
                    active:scale-95
                  "
                >
                  Read our Security Whitepaper
                </button>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div ref={el => (cardRefs.current[1] = el)} className="opacity-0 translate-y-10">
            <div className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-500">
              <div className="rounded-3xl bg-gradient-to-br from-cyan-900/60 to-teal-900/40 backdrop-blur-md p-8 h-full w-full flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-8 text-teal-300 group-hover:text-teal-400 transition-colors">
                  Compliance Certifications
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-10">
                  {/* tooltip badges */}
                  <div className="relative group">
                    <img
                      src={gdprBadge}
                      alt="GDPR Ready"
                      className="h-20 w-20 rounded-full shadow-lg ring-4 ring-cyan-400/30 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 whitespace-nowrap text-sm bg-gray-900/90 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      General Data Protection Regulation Ready
                    </span>
                  </div>

                  <div className="relative group">
                    <img
                      src={isoBadge}
                      alt="ISO 27001"
                      className="h-20 w-20 rounded-full shadow-lg ring-4 ring-cyan-400/30 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 whitespace-nowrap text-sm bg-gray-900/90 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      ISO 27001 Certified
                    </span>
                  </div>

                  <div className="relative group">
                    <img
                      src={pciBadge}
                      alt="PCI DSS"
                      className="h-20 w-20 rounded-full shadow-lg ring-4 ring-cyan-400/30 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 whitespace-nowrap text-sm bg-gray-900/90 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      PCI DSS Compliant
                    </span>
                  </div>
                </div>
                <button
                  className="
                    mt-8 py-3 px-6 rounded-full font-semibold
                    bg-gradient-to-r from-teal-500 to-cyan-500
                    hover:from-cyan-500 hover:to-teal-500
                    transition-all duration-300 shadow-lg hover:shadow-cyan-400/50
                    active:scale-95
                  "
                >
                  View Compliance Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* parallax gradient blobs */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-[pulse_4s_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-[pulse_4s_infinite]"></div> */}

      {/* <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style> */}
    </section>
  );
}
