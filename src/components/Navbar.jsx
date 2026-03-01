import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../images/Amer Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", href: "#Home" },
    { name: "About Me", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Certification", href: "#certification" },
  ];

  const contactLink = { name: "Contact Me", href: "#Contact" };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-black backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* Logo */}
        <a href="#Home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full border-2 border-white"
          />
          <span className="text-xl font-bold tracking-tight">
            Amer<span className="text-blue-400 ml-1">Hussein</span>.
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">

          {/* Left Links */}
          <nav className="flex items-center space-x-8">
            {mainLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium hover:text-blue-400 transition"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Contact Button (Right Side) */}
          

        </div>

        <button
            onClick={() => scrollToSection(contactLink.href)}
            className="hidden lg:flex px-5 py-2 bg-gradient-to-br from-blue-950 via-blue-600 to-blue-950 rounded-full text-sm font-medium hover:from-blue-900 hover:via-blue-700 hover:to-blue-900 lg:hover:scale-105 transition shadow-md"
          >
            {contactLink.name}
          </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md border-t border-slate-700">
          <div className="flex flex-col items-center py-6 space-y-4 text-white">

            {mainLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-medium hover:text-blue-400 transition"
              >
                {link.name}
              </button>
            ))}

            {/* Contact Button in Mobile */}
            <button
              onClick={() => scrollToSection(contactLink.href)}
              className="mt-2 px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
              {contactLink.name}
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;