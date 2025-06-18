import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left – Logo */}
        <div className="md:flex-1 whitespace-nowrap text-center">
          <span className="font-bold text-cyan-300 text-2xl">Barun's</span>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-300 text-2xl">
            {" "}
            Portfolio
          </span>
        </div>

        {/* Middle – Services & Quick Links */}
        <div className="flex flex-col md:flex-row gap-12   items-center justify-center md:flex-[2] text-center md:text-left">
          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-cyan-400">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300 cursor-pointer">
              {[
                "Responsive Web Design",
                "UI/UX to Code",
                "React Components",
                "Frontend Animations",
                "Forms & Validation",
                "Site Optimization",
                "Creative Landing Pages",
                "API Integrations",
              ].map((service) => (
                <span key={service} className="relative inline-block group w-fit">
                  {service}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300">
              {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                  className="relative inline-block group w-fit"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right – Social Icons */}
        <div className="md:flex-1 flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4 justify-center md:justify-end">
            {[
              {
                href: "https://www.linkedin.com/in/barun-das-97bd/",
                src: "https://images.icon-icons.com/99/PNG/512/linkedin_socialnetwork_17441.png",
                alt: "LinkedIn",
              },
              {
                href: "https://github.com/barundas97",
                src: "https://images.icon-icons.com/936/PNG/512/github-logo_icon-icons.com_73546.png",
                alt: "GitHub",
              },
              {
                href: "mailto:barundass800@gmail.com",
                src: "https://images.icon-icons.com/1011/PNG/512/Gmail_icon-icons.com_75706.png",
                alt: "Email",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 filter hover:drop-shadow-[0_0_8px_#0ff]"
              >
                <img src={item.src} alt={item.alt} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} All rights reserved.
      </p>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gray-300 hover:bg-black hover:text-white text-black w-12 h-12 flex items-center justify-center rounded-full shadow-lg animate-glow hover:scale-105 transition-transform"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
