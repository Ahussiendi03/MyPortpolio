import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 py-5 px-6 md:px-16 border-t border-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* === Left Section: Logo + Name === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-white tracking-wide">
            Amer Hussein <span className="text-blue-400">Dimaayao</span>
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        {/* === Right Section: Social Icons === */}
        <div className="flex justify-center md:justify-end gap-5 text-xl">
          <a
            href="https://github.com/Ahussiendi03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-all hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/amer-hussein-dimaayao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
