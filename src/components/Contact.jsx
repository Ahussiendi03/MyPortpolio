import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 re-animate when you scroll back
    threshold: 0.2, // 👈 triggers when 20% is visible
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
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden w-full"
    >
      {/* ===== Title ===== */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 text-center"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-slate-300 text-lg max-w-2xl text-center mb-12"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        I’d love to connect with you! Whether it’s about collaboration,
        opportunities, or just to say hello — feel free to send me a message
        below.
      </motion.p>

      {/* ===== Contact Info & Form ===== */}
      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        {/* --- Contact Info --- */}
        <motion.div
          className="flex flex-col justify-center space-y-6 bg-slate-800/60 p-8 rounded-2xl shadow-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-white">Email</h4>
              <p className="text-slate-300">ahussiendi03@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-white">Phone</h4>
              <p className="text-slate-300">+63 970 399 4761</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-white">Location</h4>
              <p className="text-slate-300">Buhangin, Davao City, Philippines</p>
            </div>
          </div>
        </motion.div>

        {/* --- Contact Form --- */}
        <motion.form
          className="bg-slate-800/60 p-8 rounded-2xl shadow-lg border border-blue-500/30 flex flex-col space-y-5 hover:border-blue-400 transition-all duration-300"
          onSubmit={(e) => e.preventDefault()}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
            <label htmlFor="name" className="block text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-slate-100 border border-slate-700 focus:border-blue-400 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-slate-100 border border-slate-700 focus:border-blue-400 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-slate-100 border border-slate-700 focus:border-blue-400 outline-none transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 hover:shadow-blue-400/50 transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default Contact
