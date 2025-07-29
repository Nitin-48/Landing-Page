import React, { useState, useRef, useEffect } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Confetti from "react-confetti";
import emailjs from "emailjs-com";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY");
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

  return (
    <>
      {success && <Confetti numberOfPieces={150} recycle={false} />}
      <audio ref={audioRef} src="/success.mp3" preload="auto" />

      {/* Main Section (desktop/tablet view) */}
      <section className="relative bg-gradient-to-b from-[#050a17] via-gray-800 to-[#050a17] text-gray-200 py-16 sm:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-cyan-500/40 bg-gray-800/50 backdrop-blur-md">
          <div className="grid md:grid-cols-2">
            {/* LEFT */}
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/60 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">touch</span>
              </h2>
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
                Fill in the form and start a conversation with our team.
              </p>
              <div className="flex items-center mb-4 sm:mb-6 group">
                <PhoneIcon className="w-6 h-6 text-cyan-400 mr-3 sm:mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-base sm:text-lg font-medium group-hover:text-cyan-300 transition-colors">
                  +91 8285868648
                </span>
              </div>
              <div className="flex items-center group">
                <MailIcon className="w-6 h-6 text-cyan-400 mr-3 sm:mr-4 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:hello@spendiz.com"
                  className="text-base sm:text-lg font-medium hover:text-cyan-300 transition-colors break-all"
                >
                  hello@spendiz.com
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-2xl"><FaLinkedin /></a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-2xl"><FaTwitter /></a>
              </div>
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* RIGHT */}
            <div className="bg-gray-900/70 p-6 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-cyan-500"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-cyan-500"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-cyan-500"
                />
                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 sm:py-3.5 rounded-lg hover:scale-[1.03] transition-transform duration-300 shadow-lg hover:shadow-cyan-500/50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-[9999] p-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg hover:scale-110 transition-transform duration-300"
      >
        📩
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9998] bg-black/70 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-fadeIn max-h-[90vh] flex flex-col">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
            <div className="p-4 sm:p-6 overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-3 text-gray-100 focus:ring-1 focus:ring-cyan-500 text-sm sm:text-base"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-3 text-gray-100 focus:ring-1 focus:ring-cyan-500 text-sm sm:text-base"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-3 text-gray-100 focus:ring-1 focus:ring-cyan-500 text-sm sm:text-base"
                />
                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

                <div className="mt-4 rounded-lg overflow-hidden border border-gray-700 shadow-md">
                  <iframe
                    title="Office Location"
                    src="https://maps.google.com/maps?q=India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-52 sm:h-64 md:h-72"
                    loading="lazy"
                  ></iframe>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:scale-[1.03] transition-transform duration-300 shadow-lg hover:shadow-cyan-500/50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from {opacity:0; transform:scale(0.95);} to {opacity:1; transform:scale(1);} }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </>
  );
}
