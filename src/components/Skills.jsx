import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaBug, FaTools, FaDatabase } from 'react-icons/fa'

const Skills = () => {
  // === Framer Motion animation controller ===
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 re-animate every time section is visible
    threshold: 0.2, // 👈 triggers when 20% of the section is visible
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  // === Animation Variants ===
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="Skills"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white overflow-hidden w-full"
    >
      {/* ===== Title ===== */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 text-center"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        className="text-slate-300 text-lg max-w-2xl text-center mb-12"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        Here are the tools, technologies, and frameworks I’ve learned and used throughout my academic and internship experience.
      </motion.p>

      {/* ===== Skill Categories ===== */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        {/* === Web Development === */}
        <motion.div
          className="bg-slate-800/60 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:border-blue-400 hover:scale-[1.02] transition-all duration-300"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">Web Development</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'React JS (Vite)',
              'Node JS',
              'Express JS',
              'Tailwind CSS',
              'HTML5',
              'CSS3',
              'JavaScript (ES6+)',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:shadow-blue-500/40 hover:bg-blue-600/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* === Database Management === */}
        <motion.div
          className="bg-slate-800/60 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:border-blue-400 hover:scale-[1.02] transition-all duration-300"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaDatabase className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">Database Management</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['MongoDB', 'MySQL (Basic)', 'Database Design', 'Schema Modeling'].map(
              (skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:shadow-blue-500/40 hover:bg-blue-600/30 transition-all duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* === Quality Assurance & Testing === */}
        <motion.div
          className="bg-slate-800/60 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:border-blue-400 hover:scale-[1.02] transition-all duration-300"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaBug className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">QA & Testing</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Manual Testing',
              'Test Case Design',
              'Bug Reporting',
              'Azure DevOps',
              'Postman (API Testing)',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:shadow-blue-500/40 hover:bg-blue-600/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* === Tools & Platforms === */}
        <motion.div
          className="bg-slate-800/60 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:border-blue-400 hover:scale-[1.02] transition-all duration-300"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaTools className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">Tools & Platforms</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'VS Code',
              'Git & GitHub',
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
        </motion.div>

        {/* === Concepts & Methodologies === */}
        <motion.div
          className="bg-slate-800/60 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:border-blue-400 hover:scale-[1.02] transition-all duration-300"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">Concepts & Methodologies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Agile / XP',
              'CRUD Operations',
              'Responsive Web Design',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:shadow-blue-500/40 hover:bg-blue-600/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
