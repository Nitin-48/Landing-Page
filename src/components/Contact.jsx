import React, { useState, useRef, useEffect } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Confetti from "react-confetti";
import emailjs from "@emailjs/browser";

export default function Contact() {
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

  return (
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
  );
}
