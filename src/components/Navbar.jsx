import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [scrolled, setScrolled] = useState(false); // Scroll shadow

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Work & Education", href: "#education" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg backdrop-blur bg-[#1a0f2bcc]"
          : "bg-[#1a0f2b]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl sm:text-2xl font-bold tracking-wide">
            <span className="text-cyan-300">Barun's</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-300">
              {" "}
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 justify-center flex-1">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="relative group text-cyan-300 text-lg font-medium transition-transform duration-300 hover:scale-110 hover:text-cyan-400"
              >
                {link.text}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-cyan-400 text-3xl focus:outline-none hover:text-orange-500"
              aria-label="Open menu"
            >
              &#9776; {/* Hamburger Icon */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-screen border-l-2 border-purple-500 bg-black/80 rounded-l-3xl shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-cyan-400 text-3xl font-semibold z-50 hover:text-orange-500 hover:scale-110 transition-transform"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Menu Links */}
        <div className="flex flex-col px-6 py-4 space-y-6 mt-20">
          <h1 className="text-purple-300 font-bold text-2xl absolute top-6">Menu</h1>
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative group text-cyan-300 text-lg font-medium transition-transform hover:scale-110 hover:text-cyan-400 w-fit"
            >
              {link.text}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
