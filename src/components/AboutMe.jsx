import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Profile from '../images/Profile.png'

const AboutMe = () => {
  // === Intersection Observer setup ===
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 allows repeat animation
    threshold: 0.2,     // 👈 triggers when 20% of the section is visible
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <section
      id="About"
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white"
    >
      {/* ===== Profile Image with Motion ===== */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full w-64 h-64 md:w-80 md:h-80 animate-pulse"></div>
          <img
            src={Profile}
            alt="Amer Hussein L. Dimaayao"
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      {/* ===== Text Section with Motion ===== */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
          Detail-oriented and motivated IT professional with hands-on experience as a
          <span className="text-blue-400 font-semibold">
            {' '}Software Quality Assurance (SQA) Manual Tester Intern at Jairosoft
          </span>,
          utilizing Azure DevOps Services for creating and managing test cases, bugs, and defects.  
          Gained a strong foundation in
          <span className="text-blue-400"> web development</span> and
          <span className="text-blue-400"> database management</span> during college, with experience in designing database schemas
          and developing user-friendly web applications.  
          Committed to ensuring software quality, improving processes, and contributing effectively to team success in a professional environment.
        </p>

        <motion.button
          onClick={() => {
            const section = document.querySelector('#Skills')
            const offset = -70
            const top = section.getBoundingClientRect().top + window.scrollY + offset
            window.scrollTo({ top, behavior: 'smooth' })
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-transform hover:-translate-y-1 mt-8"
        >
          VIEW MY TECHNICAL SKILLS
        </motion.button>
      </motion.div>
    </section>
  )
}

export default AboutMe
