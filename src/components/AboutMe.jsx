import React from 'react'
import { FaCode, FaBug, FaTools } from 'react-icons/fa'
import Profile from '../images/Profile.png'

const AboutMe = () => {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white"
    >
      {/* ===== Profile Image ===== */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full w-64 h-64 md:w-80 md:h-80 animate-pulse"></div>
          <img
            src={Profile}
            alt="Amer Hussein L. Dimaayao"
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* ===== Text Section ===== */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">About Me</h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
          Detail-oriented and motivated IT professional with hands-on experience as a
          <span className="text-blue-400 font-semibold"> Software Quality Assurance (SQA) Manual Tester Intern at Jairosoft</span>,
          utilizing Azure DevOps Services for managing test cases and bugs.  
          Skilled in <span className="text-blue-400">web development</span> and
          <span className="text-blue-400"> database design</span>, and passionate about delivering
          high-quality software and seamless user experiences.
        </p>

        {/* ===== Skills Section ===== */}
        <div className="mt-10 w-full">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Technical Skills</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Web Development */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-blue-400 text-xl" />
                <h4 className="font-semibold text-white text-lg">Web Development</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'React JS (Vite)',
                  'Node JS',
                  'Express JS',
                  'Tailwind CSS',
                  'MongoDB',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:shadow-blue-500/40 hover:bg-blue-600/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* QA & Testing */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaBug className="text-blue-400 text-xl" />
                <h4 className="font-semibold text-white text-lg">QA & Testing</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Manual Testing',
                  'Bug Tracking',
                  'Azure DevOps',
                  'Postman',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:shadow-blue-500/40 hover:bg-blue-600/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Concepts */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-blue-400 text-xl" />
                <h4 className="font-semibold text-white text-lg">Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'VS Code',
                  'Git & GitHub',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:shadow-blue-500/40 hover:bg-blue-600/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
