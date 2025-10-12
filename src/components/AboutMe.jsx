import React from 'react'
import Profile from '../images/Profile.png'

const AboutMe = () => {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white"
    >
      {/* ===== Profile Image Section ===== */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full w-72 h-72 md:w-96 md:h-96 animate-pulse"></div>
          <img
            src={Profile}
            alt="Amer Hussein L. Dimaayao"
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* ===== Text Section ===== */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">About Me</h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
          Hello! I’m <span className="text-blue-400 font-semibold">Amer Hussein L. Dimaayao</span>, 
          an aspiring IT professional and software quality assurance enthusiast from 
          <span className="text-blue-400"> Mindanao State University - Main Campus</span>.  
          I specialize in full-stack web development using the MERN stack — 
          <span className="text-blue-400"> MongoDB, Express.js, React.js, and Node.js</span>.  
          I’m passionate about creating user-friendly web applications and ensuring 
          high-quality software performance.
        </p>

        <div className="mt-8 w-full">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">Core Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {[
              'React JS',
              'Node JS',
              'MongoDB',
              'Express JS',
              'Tailwind CSS',
              'Postman',
              'VS Code',
              'Software Testing',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700 text-slate-200 rounded-full border border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
