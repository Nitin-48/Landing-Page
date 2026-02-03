// NavBar Section


import  { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import W_logo from "../assets/W_logo.png";
import Features from "./features";


// Hero Section


// import { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import AS from "../assets/AS.svg";
import GS from "../assets/GS.png";


// Animation1 Bowl

import {useRef} from 'react';
import React, { useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import illu from "../assets/illu.svg";


// Key Features Section

const featuresData = [
  {
    title: "Best Card Finder for Every Transaction",
    text: "Not sure which card to use? Spendiz picks the best one for you instantly ....more",
    details:
      "✨ Real-time logic finds the card with highest cashback, reward points, or discount — based on what you're spending on.",
  },
  {
    title: "Live Cashback & Reward Calculator",
    text: "Get exact value of what you’ll earn with each card before making a payment ....more",
    details:
      "✨ Supports real-time reward rate, cashback %, milestone logic, and brand-specific offers.",
  },
  {
    title: "Smart Nudges Before You Pay",
    text: "We alert you if another card gives you better value or if a hidden offer is applicable ....more",
    details:
      "✨ Nudges work during travel, dining, online shopping, or even at fuel stations.",
  },
  {
    title: "All Cards. One Dashboard.",
    text: "Track your cards, usage history, saved offers, and reward summary in one place ....more",
    details:
      "✨ Securely manage all your credit cards — with spend category-wise breakdowns and expiry alerts.",
  },
];


// Hero Card Style Animation2 POP-UP

const SPACER_VH = 280; // kitni der tak yeh section pinned rahe (>=120vh rakho)
const BADGE_SAFE = window.innerWidth < 640 ? 96 : 84;



// How it Works

import { FaCreditCard, FaLayerGroup, FaCheckCircle } from "react-icons/fa";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Add Your Cards",
    text: "Securely connect to your bank or manually enter your credit-card details in just a few taps. All data is encrypted end-to-end—Spendiz only stores the last four digits needed for matching.",
    icon: <FaCreditCard className="text-white text-3xl sm:text-4xl" />,
    glow: "from-teal-400 to-cyan-500",
  },
  {
    title: "Choose a Spend Category",
    text: 'Select the type of purchase you are about to make—Shopping, Travel, Dining, Entertainment, or any of our 15+ built-in categories. Drill down further with subcategories like "Flight Tickets" or "Gourmet Dining."',
    icon: <FaLayerGroup className="text-white text-3xl sm:text-4xl" />,
    glow: "from-purple-400 to-pink-500",
  },
  {
    title: "See Your Best Card",
    text: "Instantly view your top card recommendation alongside an estimated savings breakdown. We calculate reward rates, cashback caps, and minimum-spend requirements in real time—so you know exactly what you will save.",
    icon: <FaCheckCircle className="text-white text-3xl sm:text-4xl" />,
    glow: "from-yellow-400 to-orange-500",
  },
];



// Pricing & Plans

import { FaCheck, FaTimes } from "react-icons/fa";
const planData = [
  ["Card Limit", "3 cards", "5 cards", "Unlimited cards"],
  ["Custom Alerts & Notifications", false, "Included", "Included + Priority"],
  ["Advanced Cashback Tracking", false, true, true],
  ["Dynamic Offer Matching", true, true, true],
  ["Spend Insights & Savings Analytics", false, false, "Detailed Breakdown"],
  ["Priority Support", false, false, true],
  ["Family/Team Sharing", false, false, "Up to 5 users"],
  ["Early Access to New Features", false, true, "Yes + Beta Features"],
  ["Multi-device Sync", false, "Yes", "Unlimited Sync"],
  ["Smart Alerts for Missed Rewards", false, false, true],
];



// Our Team

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



// Testimonials

import Marquee from "./Marquee";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
      name: "Jill",
      username: "@jill",
      text: "I don't know what to say. I'm speechless. This is amazing.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John",
      username: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane",
      username: "@jane",
      text: "Never seen anything like this before. It's amazing.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Jenny",
      username: "@jenny",
      text: "Wow! This blew my mind. Exactly what I needed.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "James",
      username: "@james",
      text: "This is incredible. So smooth and well designed.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(2);


// Investors

import investor from "../assets/investor.svg"; // Assuming you have an SVG for investors
  


// Contact
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Confetti from "react-confetti";
import emailjs from "@emailjs/browser";


// Footer
import { FaLinkedinIn } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";



const LandingSections = () => {

 // NavBar Section

const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "feature" },
    { label: "Work", id: "work" },
    { label: "FAQ", id: "faq" },
  ];

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


  // Hero Section

  const words = ["Better", "Easier", "Faster"];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCurrentIndex((p) => (p + 1) % words.length);
      }, 2000);
      return () => clearInterval(id);
    }, [ words.length ]);
  
    useEffect(() => {
      const moveGlow = (e) => ({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", moveGlow);
      return () => window.removeEventListener("mousemove", moveGlow);
    }, []);
  
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Animation1 Bowl

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

  const BADGE_SAFE = 0;   // px: Spline badge ke liye bottom gap (mobile pe 96 try)
  const FADE_HEIGHT = '30vh'; // kitna upar tak fade chahiye

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------



// Abiut Section
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Key Features Section

const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideAnyCard = cardsRef.current.some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!clickedInsideAnyCard) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



// Hero Card Style Animation2 POP-UP

const sectionRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
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

// const BADGE_SAFE = 0;   // px: Spline badge ke liye bottom gap (mobile pe 96 try)
//   const FADE_HEIGHT = '30vh'; // kitna upar tak fade chahiye


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// how it Works

const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoCycleDone, setAutoCycleDone] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoCycleDone) {
      intervalRef.current = setInterval(() => {
        setPhase((prev) => {
          if (prev === steps.length - 1) {
            clearInterval(intervalRef.current);
            setAutoCycleDone(true);
            return prev;
          }
          return prev + 1;
        });
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoCycleDone]);

  const getCardDimensions = () => {
    if (typeof window === "undefined") return { width: 320, gap: 60 };
    const w = window.innerWidth;
    if (w < 480) return { width: 280, gap: 40 };
    if (w < 768) return { width: 320, gap: 60 };
    if (w < 1024) return { width: 340, gap: 80 };
    return { width: 360, gap: 100 };
  };
  const { width: cardWidth, gap } = getCardDimensions();

  const getTransform = (i) => {
    if (isMobile) {
      if (phase === i) return "translateY(0)";
      if (i < phase) return "translateY(-200%)";
      return "translateY(200%)";
    }
    if (phase === 0) return i === 0 ? "translateX(0)" : "translateX(200%)";
    if (phase === 1) {
      if (i === 0) return `translateX(-${(cardWidth + gap) / 2}px)`;
      if (i === 1) return `translateX(${(cardWidth + gap) / 2}px)`;
      return "translateX(200%)";
    }
    if (phase === 2) {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        if (i === 0) return "translateX(-200%)";
        if (i === 1) return `translateX(-${(cardWidth + gap) / 2}px)`;
        if (i === 2) return `translateX(${(cardWidth + gap) / 2}px)`;
      }
      if (i === 0) return `translateX(-${cardWidth + gap}px)`;
      if (i === 1) return `translateX(0)`;
      if (i === 2) return `translateX(${cardWidth + gap}px)`;
    }
    return "translateX(200%)";
  };

  const getOpacity = (i) => {
    if (isMobile) return phase === i ? 1 : 0;
    if (phase === 0) return i === 0 ? 1 : 0;
    if (phase === 1) return i === 0 || i === 1 ? 1 : 0;
    if (phase === 2) {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        return i === 1 || i === 2 ? 1 : 0;
      }
      return 1;
    }
    return 0;
  };

  const getZIndex = (i) => {
    if (isMobile) {
      if (phase === 1) return i === 1 ? 10 : 5;
      if (phase === 2) {
        if (i === 2) return 20;
        if (i === 1) return 10;
        return 5;
      }
    }
    return 1;
  };

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// FAQ
// const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "How does Spendiz find the best offers?",
      a: "Spendiz fetches live offers directly from banks and partner merchants using secure APIs and real-time web scraping. All offers are cleaned, verified, and constantly refreshed.",
    },
    {
      q: "Is my card or personal data secure?",
      a: "Yes. We use bank-grade AES-256 encryption, tokenization (we only store the last 4 digits), and deploy on a SOC 2 compliant cloud. We also conduct regular security audits.",
    },
    {
      q: "Which banks and cards are supported?",
      a: "Spendiz currently supports credit cards from HDFC, ICICI, SBI, Axis, Kotak, and many co-branded and corporate cards. We keep adding new cards regularly.",
    },
    {
      q: "Can I share my Spendiz account?",
      a: "Yes. On our Premium plan, you can share access with up to 5 family members or team members for optimized spend tracking.",
    },
    {
      q: "How often are offers and deals updated?",
      a: "All offers are updated in real-time. As soon as a bank or merchant updates or ends an offer, Spendiz reflects that instantly.",
    },
  ];

  const filteredFaqs = faqData.filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Contact

const [, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (success && audioRef.current) audioRef.current.play();
  }, [success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send("service_6n11rq5", "template_ucr18na", formData, "Z6KTcxXiFUQp1gkZI");
      setLoading(false);
      setSuccess(true);
      if (navigator.vibrate) navigator.vibrate(100);
      setTimeout(() => {
        setSuccess(false);
        setShowModal(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Error sending message.");
    }
  };




  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Footer
  const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setShowButton(window.scrollY > 300);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });





  return (

    <section>

{/* ------------------------------------------------------------NavBar Section------------------------------------------------------ */}

<section>
<header className="fixed top-0 left-0 w-full z-50 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-md transition-colors">
      {/* Scroll Progress Bar */}
      <div
        className="h-[3px] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 transition-all duration-150 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navbar content */}
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-4 lg:px-8 -translate-y-1.5">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src={W_logo}
            alt="Spendiz"
            className="w-[220px] h-25 hover:scale-110 transition-transform duration-300 p-0"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <nav
            className="
              flex items-center space-x-4
              bg-black/90
              rounded-full
              px-5 py-3
              md:py-0 md:px-3
              lg:py-3 lg:px-5
              shadow-[0_0_15px_rgba(0,255,255,0.1)]
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="
                  text-gray-200 text-base font-medium px-3 py-1 rounded-full
                  hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 hover:text-black transition-all duration-200
                "
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="
                flex items-center text-gray-200 text-base font-medium px-3 py-1 rounded-full
                hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 hover:text-black transition-all duration-200
              "
            >
              Contact us <ChevronRight size={16} className="ml-1" />
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#"
            className="
              bg-gradient-to-r from-gray-600 via-white/25 to-gray-600
              text-white text-base font-bold
              px-5 py-3
              md:py-0 md:px-3
              lg:py-3 lg:px-5
              rounded-full
              hover:scale-[1.05] transition-transform duration-200
            "
          >
            Download now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-transform duration-600 ease-in-out
          ${isOpen ? "max-h-[350px] py-4" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-4 bg-white/40 dark:bg-black/70 backdrop-blur-md text-black dark:text-white p-5 rounded-2xl border border-cyan-400/30 mx-4 shadow-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={toggleMenu}
                className="block text-lg hover:text-gray-400 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="flex items-center gap-1 text-lg hover:text-cyan-400 transition-colors"
            >
              Contact us <ChevronRight size={16} />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={toggleMenu}
              className="
                block text-lg font-bold
                bg-gradient-to-r from-black to-gray-400
                text-white px-4 py-2
                rounded-full text-center
                border border-cyan-400/40
                hover:scale-[1.05] transition-transform duration-200
              "
            >
              Download now
            </a>
          </li>
        </ul>

        {/* Optional Mobile Features Section */}
        <div className="mt-6 px-4">
          <Features />
        </div>
      </div>
    </header>


</section>





{/* ----------------------------------------------------------------Hero Section--------------------------------------------------------- */}


 <section
      id="hero"
      className="relative min-h-screen bg-black text-white overflow-hidden px-0 pt-24 sm:pt-0 flex"
    >
      {/* background bits (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.06"
            d="M0,256L40,229.3C80,203,160,149,240,144C320,139,400,181,480,208C560,235,640,245,720,245.3C800,245,880,235,960,218.7C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 3xl:px-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 relative z-10">
        {/* LEFT */}
        <div className="order-1 space-y-4 sm:space-y-6 text-center md:text-left px-2 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-transparent bg-clip-text bg-white">
              Save more on every spend
            </span>
            <span className="block mt-2">
              Make life{" "}
              <span className="relative inline-block ml-2 w-[6ch] h-[1em] align-baseline">
                {words.map((w, i) => (
                  <span
                    key={i}
                    className={`absolute left-0 top-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-400 font-extrabold transition-opacity duration-700 ${
                      currentIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed px-2 sm:px-0">
            Spendiz helps you find the best credit card for every payment. <br />
            Earn maximum cashback, rewards & discounts — automatically, in real-time.
          </p>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <a href="#work">
              <img
                src={AS}
                alt="App Store"
                className="h-[44px] w-auto object-contain block hover:scale-110 transition-transform"
              />
            </a>
            <a href="#feature">
              <img
                src={GS}
                alt="Google Play"
                className="h-[62px] w-auto object-contain block hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

       {/* RIGHT — Mobile only */}
<div className="md:hidden relative w-full mt-6">
  <div className="relative w-full h-[320px] sm:h-[380px]">
    <Spline
      scene="https://prod.spline.design/1PbkEGm7yhWUmH1m/scene.splinecode"
      className="absolute inset-0 w-full h-full"
    />
  </div>

  {/* Soft fades so edges blend on mobile */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black via-black/70 to-transparent" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black via-black/70 to-transparent" />
</div>

{/* RIGHT — Tablet/Laptop exactly as before */}
<div className="hidden md:block absolute inset-0 h-screen w-screen translate-x-40 -translate-y-0 z-0">
  <Spline
    scene="https://prod.spline.design/1PbkEGm7yhWUmH1m/scene.splinecode"
    className="w-screen h-screen"
  />
</div>

      </div>
    </section>




     {/* ----------------------------------------------------------------Animation1 Bowl------------------------------------------------------ */}
        

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
    
    
    </section>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

    {/* ----------------------------------------------------------------About Section------------------------------------------------------ */}
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

{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* -----------------------------------------------------------------Key Features-------------------------------------------------------------------------------- */}


<section
      id="features"
      className="relative bg-black pt-24 sm:pt-28 md:pt-28 pb-20 text-white"
    >
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-white bg-clip-text text-transparent mb-16">
          ✨ Key Features
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {featuresData.map((f, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`
                  group relative cursor-pointer rounded-2xl overflow-hidden
                  border ${isActive ? "border-white" : "border-gray-700"}
                  bg-white/5 backdrop-blur-md
                  p-6 sm:p-8 min-h-[260px]
                  flex flex-col justify-between
                  transform transition-all duration-500 ease-out
                  hover:scale-[1.03] 
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.2),0_10px_20px_rgba(255,255,255,0.05)]
                  ${isActive ? "scale-105 shadow-[0_0_15px_rgba(255,255,255,0.4),0_20px_30px_rgba(255,255,255,0.1)]" : ""}
                `}
              >
                <h2 className="text-xl sm:text-2xl font-bold bg-white/95 bg-clip-text text-transparent mb-3">
                  {f.title}
                </h2>

                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-3">
                  {f.text.replace("....more", "")}
                  <span className="inline-flex items-center ml-1">
                    <span className="italic text-gray-400">....more</span>
                    <span
                      className={`ml-1 inline-block transform transition-transform duration-300 ${
                        isActive ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      →
                    </span>
                  </span>
                </p>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 max-h-40 mt-2"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-400 text-sm sm:text-base">
                    {f.details}
                  </p>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 z-[-1] rounded-2xl group-hover:bg-white/5 transition duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
{/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


{/* -----------------------------------------------------------------Animation2 POP-UP-------------------------------------------------------------------------------- */}


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



{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* -------------------------------------------------------------------How it Works------------------------------------------------------------------------------------ */}



<section
      id="work"
      className="relative max-w-screen text-white py-12 sm:py-16 lg:py-18 px-4 overflow-hidden bg-black"
    >
      {/* HEADING */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-tight mb-20 sm:mb-6 bg-white bg-clip-text text-transparent animate-[gradientShift_8s_linear_infinite]"
        data-aos="fade-up"
      >
        How it Works
      </h2>

      {/* TOOLTIP TEXT
      <p className="text-center text-sm text-gray-400 mb-6">
        👉 Tap on steps below to explore Spendiz in action
      </p> */}

      {/* CARDS */}
      <div
        className="relative flex justify-center items-center w-full min-h-[500px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {steps.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-2xl p-5 sm:p-6 lg:p-4 flex flex-col items-center text-center
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-[0_0_0.5px_rgba(255,255,255,0.15),0_0.5px_0.5px_rgba(0,0,0,0.6)]
              hover:shadow-[0_0_10px_rgba(255,255,255,0.3),0_10px_10px_rgba(0,0,0,0.7)]
              transition-all duration-700 ease-out space-y-3 sm:space-y-4"
            style={{
              width: `${cardWidth}px`,
              transform: getTransform(i),
              opacity: getOpacity(i),
              zIndex: getZIndex(i),
              transition: "transform 0.7s ease, opacity 0.7s ease",
              margin: isMobile ? "0 auto" : undefined,
            }}
          >
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 sm:mb-5 rounded-xl bg-gradient-to-br ${s.glow} shadow-lg flex items-center justify-center`}
            >
              {s.icon}
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white bg-clip-text bg-gradient-to-r from-white to-gray-300 px-2">
              {s.title}
            </h3>
            <p className="text-gray-300 text-left text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              {s.text}
            </p>
          </div>
        ))}
      </div>

      {/* CONTROLS - Moved after cards */}
      <div className="w-full flex justify-center mt-12">
        <div
          className="z-20 flex flex-wrap justify-center gap-2 bg-black/80 rounded-full w-fit p-2 backdrop-blur-md border border-gray-700 shadow-inner shadow-black/30"
          data-aos="fade-up"
        >
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setPhase(i)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                phase === i
                  ? "bg-gradient-to-r from-white to-white text-black shadow-[0_0_10px_white]"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              Step {i + 1}
              {phase === i && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-ping"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

{/* -----------------------------------------------------------------Pricing & Plans--------------------------------------------------------------------------------------- */}


<section className="relative py-16 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-[80vw] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 pb-1 tracking-tight bg-white bg-clip-text text-transparent">
          Pricing <span>&amp; Plans</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
          Choose the plan that matches your vibe. Whether you’re just exploring or ready to go all‑in, we’ve got you.
        </p>

        {/* Mobile: Stacked cards */}
        <div className="block sm:hidden mt-10 space-y-6">
          {planData.map(([feature, free, premium, premiumPlus], i) => (
            <div key={i} className="border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur-md">
              <h3 className="font-semibold text-base mb-2">{feature}</h3>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Free:</strong>{" "}
                  {typeof free === "boolean" ? (
                    free ? (
                      <FaCheck className="inline text-green-400" />
                    ) : (
                      <FaTimes className="inline text-red-400" />
                    )
                  ) : (
                    free
                  )}
                </p>
                <p>
                  <strong>Premium:</strong>{" "}
                  {typeof premium === "boolean" ? (
                    premium ? (
                      <FaCheck className="inline text-green-400" />
                    ) : (
                      <FaTimes className="inline text-red-400" />
                    )
                  ) : (
                    premium
                  )}
                </p>
                <p>
                  <strong>Premium Plus:</strong>{" "}
                  {typeof premiumPlus === "boolean" ? (
                    premiumPlus ? (
                      <FaCheck className="inline text-green-400" />
                    ) : (
                      <FaTimes className="inline text-red-400" />
                    )
                  ) : (
                    premiumPlus
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Full table */}
        <div className="hidden sm:block mt-12 overflow-x-auto w-full">
          <div className="w-full max-w-full overflow-x-auto">

            <table className="min-w-full border-collapse bg-white/5 backdrop-blur-md text-white text-sm sm:text-base md:text-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="text-gray-400 text-sm sm:text-base lg:text-lg">
                  <th className="p-3 sm:p-4 text-left">Feature</th>
                  <th className="p-3 sm:p-4 text-center">Free</th>
                  <th className="p-3 sm:p-4 text-center">Premium</th>
                  <th className="p-3 sm:p-4 text-center">Premium Plus</th>
                </tr>
              </thead>
              <tbody>
                {planData.map(([feature, free, premium, premiumPlus], i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="p-3 sm:p-4 text-left">{feature}</td>
                    {[free, premium, premiumPlus].map((item, j) => (
                      <td key={j} className="p-3 sm:p-4 text-center">
                        {typeof item === "boolean" ? (
                          item ? (
                            <FaCheck className="text-green-400 inline" />
                          ) : (
                            <FaTimes className="text-red-400 inline" />
                          )
                        ) : (
                          item
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
    </section>


{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------Our Team-----------------------------------------------------------------------------------------------------*/}


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



{/* =============================================================================================================================================================================
===================================================================Testimonials===================================================================================== */}

<section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-black text-white overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        {/* Heading */}
        <div className="relative mb-12">
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl font-extrabold text-center
              bg-gradient-to-r from-white to-gray-400
              bg-clip-text text-transparent
              animate-[gradientShift_8s_linear_infinite]
              drop-shadow-md
            "
          >
            What People Are Saying
          </h2>
        </div>

        <div className="relative ">
          {/* FIRST MARQUEE */}
          <Marquee speed={30} pauseOnHover>
            {firstRow.map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] mx-3 mb-6 animate-fadeInUp p-1 rounded-lg"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="
                  group bg-gradient-to-br from-black/80  to-gray-900/70 backdrop-blur-md border border-cyan-400/10
                  rounded-2xl p-5 sm:p-6
                  shadow-[0_0_20px_rgba(255,255,255,0.05)]
                  transition-all duration-300
                  hover:border-gray-800 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]
                  hover:scale-[1.03]
                ">
                  <div className="flex items-center  gap-3 mb-3">
                    <div className="
                      w-12 h-12 rounded-full overflow-hidden
                      relative flex-shrink-0
                      transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                      before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-teal-400 before:via-cyan-400 before:to-purple-500 before:-z-10
                    " style={{ boxShadow: "0 0 10px rgba(34,211,238,0.4)" }}>
                      <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white flex items-center gap-1">
                        {t.name}
                        <FaCheckCircle className="text-teal-400 text-sm" title="Verified User" />
                      </p>
                      <p className="text-sm text-gray-400">{t.username}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar key={idx} className={`text-lg ${idx < t.rating ? "text-yellow-400" : "text-gray-600"}`} />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{t.text}</p>
                </div>
              </div>
            ))}
          </Marquee>

          {/* SECOND MARQUEE */}
          <Marquee speed={20} pauseOnHover reverse>
            {secondRow.map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] mx-3 mb-6 animate-fadeInUp p-1 rounded-lg"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="
                  group bg-gradient-to-br from-black/80 to-gray-900/70 backdrop-blur-md border border-purple-400/10
                  rounded-2xl p-5 sm:p-6
                  shadow-[0_0_20px_rgba(255,255,255,0.05)]
                  transition-all duration-300
                  hover:border-gray-800 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]
                  hover:scale-[1.03]
                ">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="
                      w-12 h-12 rounded-full overflow-hidden
                      relative flex-shrink-0
                      transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6
                      before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-purple-400 before:via-teal-400 before:to-cyan-400 before:-z-10
                    " style={{ boxShadow: "0 0 10px rgba(139,92,246,0.4)" }}>
                      <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white flex items-center gap-1">
                        {t.name}
                        <FaCheckCircle className="text-teal-400 text-sm" title="Verified User" />
                      </p>
                      <p className="text-sm text-gray-400">{t.username}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar key={idx} className={`text-lg ${idx < t.rating ? "text-yellow-400" : "text-gray-600"}`} />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{t.text}</p>
                </div>
              </div>
            ))}
          </Marquee>

          {/* GRADIENT EDGES */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </div>
    </section>



{/* ===============================================================================================================================================================================================
==============================================================================FAQ====================================================================================================     */}


<section className="relative bg-white text-gray-900 dark:bg-black dark:text-white overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-8 xl:px-12 py-20 max-w-[] xl:max-w-5xl 2xl:max-w-500  mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-300 animate-[gradientShift_8s_linear_infinite]">
            Frequently Asked Questions
          </span>
        </h2>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 md:p-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white/80 dark:bg-gray-900 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {filteredFaqs.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? "border-black shadow-[0_0_20px_rgba(13,148,136,0.3)]"
                    : "border-white hover:border-gray-400 hover:shadow-[0_0_12px_rgba(13,148,136,0.15)]"
                } bg-white dark:bg-gray-900`}
              >
                <button
                  className="w-full px-5 py-4 flex justify-between items-center text-left group"
                  onClick={() => toggleFAQ(i)}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium group-hover:text-black dark:group-hover:text-white">
                    {item.q}
                  </span>
                  <span
                    className={`text-2xl font-bold transform transition-transform ${
                      isOpen
                        ? "rotate-45 text-black dark:text-white"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>



{/* ==============================================================================================================================================================================================/
============================================================================Investors======================================================================================================= */}

<section className="relative bg-black text-white py-16 px-4 sm:px-8 md:px-16 xl:px-24">
      <div className="max-w-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-white bg-clip-text text-transparent">
            For Investors <br /><span className="text-gray-400 text-2xl">(Join the Future of Spending )</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Spendiz is reshaping how India uses credit cards — smarter, faster,
            and fully optimized. We help users maximize rewards, avoid hidden
            charges, and unlock the best offers across all their cards.
          </p>

          <div className="mt-8 space-y-4 text-base text-gray-400">
            <p>📈 <strong>14,000+ cards optimized</strong> via our platform</p>
            <p>💳 <strong>INR 8Cr+ saved</strong> in missed rewards till date</p>
            <p>🧠 AI-powered engine for real-time offer matching</p>
            <p>📱 Growing user base across Tier 1 & Tier 2 cities</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/investor-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition text-center"
            >
              Get Our Investor Deck →
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition text-center"
            >
              Become an Investor
            </a>
          </div>

        </div>

        {/* RIGHT: Illustration or Image */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={investor}
            alt="Spendiz Growth Graph"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Background circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    </section>

{/* ==============================================================================================================================================================================================/
============================================================================Contact======================================================================================================= */}

<>
      {success && <Confetti numberOfPieces={180} recycle={false} />}
      <audio ref={audioRef} src="/success.mp3" preload="auto" />

    <section className="relative dark:bg-[#0c0c0c] bg-white text-gray-800 dark:text-gray-200 py-16 sm:py-20 px-6 md:px-12 xl:px-28 2xl:px-48 3xl:px-72">
      <div className="max-w-screen-screen 3xl:max-w-[1800px] mx-auto rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-gray-300/20 dark:border-gray-600/40 bg-gray-100 dark:bg-white/5 backdrop-blur-md">

          <div className="grid md:grid-cols-2">
            <div className="relative p-6 sm:p-8 md:p-10 xl:p-14 2xl:p-20 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight">
                Get in touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg xl:text-xl">
                Fill in the form and start a conversation with our team.
              </p>
              <div className="flex items-center mb-4 sm:mb-6 group">
                <PhoneIcon className="w-6 h-6 xl:w-8 xl:h-8 text-gray-500 dark:text-gray-300 group-hover:text-white mr-3 sm:mr-4" />
                <span className="text-base sm:text-lg xl:text-xl font-medium group-hover:text-white transition-colors">
                  +91 8285868648
                </span>
              </div>
              <div className="flex items-center group">
                <MailIcon className="w-6 h-6 xl:w-8 xl:h-8 text-gray-500 dark:text-gray-300 group-hover:text-white mr-3 sm:mr-4" />
                <a
                  href="mailto:hello@spendiz.com"
                  className="text-base sm:text-lg xl:text-xl font-medium hover:text-white break-all"
                >
                  hello@spendiz.com
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-2xl xl:text-3xl transition-transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-2xl xl:text-3xl transition-transform hover:scale-110"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full blur-3xl opacity-20 dark:opacity-10"></div>
            </div>

            <div className="bg-white dark:bg-transparent p-6 sm:p-8 md:p-12 xl:p-14 2xl:p-20">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/20 px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm sm:text-base xl:text-lg"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/20 px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm sm:text-base xl:text-lg"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                
                <input
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/20 px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm sm:text-base xl:text-lg"
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}


                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/20 px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm sm:text-base xl:text-lg"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-semibold py-3 rounded-lg hover:scale-[1.02] transition-transform duration-200 shadow-lg hover:shadow-black/40 text-sm sm:text-base xl:text-lg"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>




{/* ==============================================================================================================================================================================================/
============================================================================Footer======================================================================================================= */}


<>
      <footer className="relative bg-white dark:bg-[#0c0c0c] px-4 sm:px-6 pt-4 pb-6 border-t border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-300 overflow-hidden">
        {/* Waves */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-br from-black/10 via-black/5 to-transparent dark:from-white/10 dark:via-white/5 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-tr from-black/10 via-black/5 to-transparent dark:from-white/10 dark:via-white/5 blur-3xl rounded-full pointer-events-none animate-pulse"></div>

        {/* Main Flex Layout */}
        <div className="relative z-10 max-w-screen mx-auto flex flex-col sm:flex-row justify-between top-4 items-start gap-y-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 text-sm">
            <div className="flex gap-6">
              <a href="#" className="relative group">
                <span className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group">
                <span className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400 font-medium">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors group relative">
                  <FaXTwitter className="text-lg" />
                  <span className="hidden sm:inline">Twitter</span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors group relative">
                  <FaLinkedinIn className="text-lg" />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors group relative">
                  <FaInstagram className="text-lg" />
                  <span className="hidden sm:inline">Instagram</span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Subscription */}
          <div className="max-w-lg w-full text-center sm:text-right">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Get updates, offers, and smart savings straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full sm:w-auto min-w-[250px] px-4 py-2 text-sm border border-gray-300 dark:border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © 2025 <span className="font-semibold text-black dark:text-white">Spendiz</span>, Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-10 right-4 sm:right-6 z-[9999] p-3 rounded-full bg-gradient-to-r from-gray-600/60 to-gray-800 text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Back to Top"
        >
          <FiChevronUp className="text-xl" />
        </button>
      )}
    </>





</section>
  );
}

export default LandingSections
