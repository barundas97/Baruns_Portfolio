import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qeqeemc",
        "template_rqthybs",
        formRef.current,
        "X9th_rx7URpKcrSj1"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setError(true);
          setSuccess(false);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 md:px-16 lg:px-32 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475663_1280.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div
        ref={sectionRef}
        className={`transition-all duration-1000 ease-out transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } bg-white/10 backdrop-blur-xl border border-purple-500 rounded-2xl p-8 flex flex-col md:flex-row gap-10`}
      >
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Contact Me
          </h2>
          <p className="text-white/90 text-lg">
            Let's Connect ! For Our Future Project!
          </p>

          <div className="mt-6 space-y-2">
            <p>📍 Jhargram, West Bengal</p>
            <p>📞 <a href="tel:8918594598" className="hover:underline">8918594598</a></p>
            <p>📧 <a href="mailto:barundass800@gmail.com" className="hover:underline">barundass800@gmail.com</a></p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/barun-das-97bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:drop-shadow-[0_0_8px_#0ff]"
            >
              <img
                src="https://images.icon-icons.com/99/PNG/512/linkedin_socialnetwork_17441.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://github.com/barundas97"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:drop-shadow-[0_0_8px_#0ff]"
            >
              <img
                src="https://images.icon-icons.com/936/PNG/512/github-logo_icon-icons.com_73546.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
            <a
              href="mailto:barundass800@gmail.com"
              className="hover:drop-shadow-[0_0_8px_#0ff]"
            >
              <img
                src="https://images.icon-icons.com/1011/PNG/512/Gmail_icon-icons.com_75706.png"
                alt="Email"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="md:w-1/2 space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Name"
              className="peer w-full px-3 pt-5 pb-2 bg-transparent border-b-2 border-white text-white placeholder-transparent focus:outline-none focus:border-cyan-400"
            />
            <label className="absolute left-3 top-2 text-sm text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email"
              className="peer w-full px-3 pt-5 pb-2 bg-transparent border-b-2 border-white text-white placeholder-transparent focus:outline-none focus:border-cyan-400"
            />
            <label className="absolute left-3 top-2 text-sm text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Message"
              className="peer w-full px-3 pt-5 pb-2 bg-transparent border-b-2 border-white text-white placeholder-transparent focus:outline-none focus:border-cyan-400"
            ></textarea>
            <label className="absolute left-3 top-2 text-sm text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Message
            </label>
          </div>

          {/* Success / Error Message */}
          {success && (
            <p className="text-green-400 font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-400 font-semibold">
              ❌ Failed to send message. Try again.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
