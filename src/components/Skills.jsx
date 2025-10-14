import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaCode, FaBug, FaTools, FaDatabase,
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaAws,
} from 'react-icons/fa'
import { SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostman } from 'react-icons/si'
import { VscAzureDevops } from "react-icons/vsc";

const Skills = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) controls.start('visible')
    else controls.start('hidden')
  }, [controls, inView])

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
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'React JS (Vite)', icon: <FaReact className="text-cyan-400" /> },
              { name: 'Node JS', icon: <FaNodeJs className="text-green-500" /> },
              { name: 'Express JS', icon: <SiExpress className="text-gray-300" /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
              { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
              { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
              { name: 'JavaScript (ES6+)', icon: <FaJsSquare className="text-yellow-400" /> },
            ].map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:bg-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300"
              >
                {skill.icon} {skill.name}
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
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
              { name: 'MySQL (Basic)', icon: <SiMysql className="text-blue-400" /> },
              { name: 'Database Design', icon: <FaDatabase className="text-blue-300" /> },
              { name: 'Schema Modeling', icon: <FaCode className="text-purple-400" /> },
            ].map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:bg-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300"
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* === QA & Testing === */}
        <motion.div
          className="bg-slate-800/60 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:border-blue-400 hover:scale-[1.02] transition-all duration-300"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaBug className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">QA & Testing</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Manual Testing', icon: <FaBug className="text-red-400" /> },
              { name: 'Test Case Design', icon: <FaCode className="text-purple-400" /> },
              { name: 'Bug Reporting', icon: <FaBug className="text-yellow-400" /> },
              { name: 'Azure DevOps', icon: <VscAzureDevops className="text-blue-400" /> },
              { name: 'Postman (API Testing)', icon: <SiPostman className="text-orange-400" /> },
            ].map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:bg-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300"
              >
                {skill.icon} {skill.name}
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
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
              { name: 'Git & GitHub', icon: <FaGithub className="text-white" /> },
              { name: 'Azure DevOps', icon: <VscAzureDevops className="text-blue-400" />  },
              { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
            ].map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:bg-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300"
              >
                {skill.icon} {skill.name}
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
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Agile / XP', icon: <FaTools className="text-green-300" /> },
              { name: 'CRUD Operations', icon: <FaCode className="text-purple-400" /> },
              { name: 'Responsive Web Design', icon: <FaReact className="text-cyan-400" /> },
            ].map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-slate-800 border border-blue-500/40 text-slate-200 text-sm font-medium shadow-md hover:bg-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300"
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
