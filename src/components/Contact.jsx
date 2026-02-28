import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
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
      id="Contact"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-16 sm:py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden w-full"
    >
      {/* ===== Title ===== */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-6 text-center tracking-wide"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* ===== Contact Info Box ===== */}
      <motion.div
        className="w-full max-w-3xl flex flex-col items-center text-center space-y-6 sm:space-y-8 bg-slate-800/70 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-blue-500/40"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed">
          I’m open to opportunities, collaborations, and freelance projects.
          Feel free to reach out through any of the platforms below.
        </p>

        {/* Contact Details */}
        <div className="space-y-3 sm:space-y-4 text-slate-200 text-base sm:text-lg">
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-2 sm:gap-3 hover:text-blue-400 transition-all">
            <FaEnvelope className="text-blue-400 text-xl sm:text-2xl" />
            <a
              href="mailto:ahussiendi03@gmail.com"
              className="hover:text-blue-300 transition-all break-all"
            >
              ahussiendi03@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-2 sm:gap-3 hover:text-blue-400 transition-all">
            <FaPhone className="text-blue-400 text-xl sm:text-2xl" />
            <span>+63 970 399 4761</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-2 sm:gap-3 hover:text-blue-400 transition-all">
            <FaMapMarkerAlt className="text-blue-400 text-xl sm:text-2xl" />
            <span>Buhangin, Davao City, Philippines</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 w-full justify-center flex-wrap">
          <a
            href="https://github.com/Ahussiendi03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-blue-600 hover:to-blue-500 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
          >
            <FaGithub className="text-xl sm:text-2xl" /> <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/amer-hussein-dimaayao-5a8154386"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-blue-700 hover:to-blue-500 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
          >
            <FaLinkedin className="text-xl sm:text-2xl" /> <span>LinkedIn</span>
          </a>
        </div>

      </motion.div>
    </section>
  )
}

export default Contact