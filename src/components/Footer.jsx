import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 py-8 px-6 sm:px-10 md:px-16 border-t border-slate-700 overflow-hidden">
      {/* === Animated Top Border === */}
      

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 z-10 relative">
        {/* === Left Section: Logo + Name === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Amer Hussein <span className="text-blue-400">Dimaayao</span>
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* === Right Section: Social Icons === */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl sm:text-3xl">
          <a
            href="https://github.com/Ahussiendi03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-all transform hover:scale-125 hover:drop-shadow-[0_0_6px_#fff]"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/amer-hussein-dimaayao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-all transform hover:scale-125 hover:drop-shadow-[0_0_6px_#3b82f6]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all transform hover:scale-125 hover:drop-shadow-[0_0_6px_#60a5fa]"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* === Back to Top Button === */}
      <button
        onClick={scrollToTop}
        className="hidden md:flex absolute right-6 bottom-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 animate-bounce"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
