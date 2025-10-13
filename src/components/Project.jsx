import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import ProjectImg from '../images/project.png' // <-- add your project image here (or replace with placeholder)

const Project = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-10 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        {/* ===== Project Card ===== */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-blue-500/30 hover:border-blue-400 hover:scale-[1.02] transition-all duration-300">
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={ProjectImg}
              alt="MSU CampusGigs"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              MSU CampusGigs
            </h3>
            <p className="text-blue-400 text-sm font-medium mb-3">
              Capstone Project • Mindanao State University - Main Campus
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              A web-based platform designed to help undergraduate students at
              MSU Main Campus find part-time job opportunities within 
              the university. The system allows students to browse
              available gigs, apply easily, and manage job listings while
              employers can post and track job applications efficiently.
            </p>

            {/* ===== Tech Stack Tags ===== */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['React JS (Vite)', 'Node JS', 'Express JS', 'MongoDB', 'Tailwind CSS'].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-slate-700 text-slate-200 text-sm border border-blue-400/40 hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* ===== Action Buttons ===== */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all"
              >
                <FaExternalLinkAlt /> View Project
              </a>
              <a
                href="https://github.com/Ahussiendi03/CampusGigs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ===== Placeholder for Future Projects ===== */}
        <div className="flex flex-col items-center justify-center bg-slate-800/50 rounded-2xl border border-slate-700 p-6 text-center hover:border-blue-400 transition-all duration-300">
          <h3 className="text-xl font-semibold text-slate-200 mb-2">
            More Projects Coming Soon
          </h3>
          <p className="text-slate-400 max-w-sm">
            Stay tuned for more of my development works and open-source
            contributions as I continue to grow my portfolio.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Project
