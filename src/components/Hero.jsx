import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter"; // ✅ import typewriter
import Profile from "../images/Profile1.png";
import Logo from "../images/Amer Logo.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <section
      id="Home"
      ref={ref}
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16 py-20 text-white overflow-hidden w-full"
      style={{
        backgroundImage: `url(${Logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* === Transparent Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/85 to-slate-900/95 backdrop-blur-sm"></div>

      {/* === Text Section === */}
      <motion.div
        className="relative z-10 lg:w-1/2 flex flex-col items-center lg:items-start md:items-center mt-10 lg:mt-0 text-center lg:text-left"
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* === Typewriter Heading === */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Hi, I’m{' '} */}
          <span className="text-blue-400 font-extrabold  lg:ml-0">
            <Typewriter
              words={["Amer Hussein"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl  lg:ml-0 text-slate-300 max-w-md"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Aspiring Software Engineer • Web Developer • Software Quality
          Assurance
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 lg:ml-0"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={() => {
              const section = document.querySelector("#Projects");
              const offset = -70;
              const top =
                section.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-transform hover:-translate-y-1"
          >
            View My Work
          </button>

          <button
            onClick={() => {
              const section = document.querySelector("#Contact");
              const offset = -70;
              const top =
                section.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-transform hover:-translate-y-1"
          >
            Contact Me
          </button>
        </motion.div>
        <motion.div
          className="mt-8 flex gap-6  lg:ml-0"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/Ahussiendi03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-transform transform hover:-translate-y-1 hover:scale-110"
          >
            <FaGithub className="text-4xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amer-hussein-dimaayao-5a8154386"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-transform transform hover:-translate-y-1 hover:scale-110"
          >
            <FaLinkedin className="text-4xl" />
          </a>

          {/* Facebook */}
          <a
            href="https://web.facebook.com/hussien.dimaayao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-transform transform hover:-translate-y-1 hover:scale-110"
          >
            <FaFacebook className="text-4xl" />
          </a>
        </motion.div>
      </motion.div>

      {/* === Profile Image === */}
      <motion.div
        className="relative z-10 md:w-1/2 flex justify-center md:justify-center lg:justify-end mb-10 md:mb-0"
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 flex justify-center md:justify-center lg:justify-end"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:h-96 lg:w-96 bg-blue-700 blur-xl rounded-full"></div>
        </motion.div>
        <motion.img
          src={Profile}
          alt="Amer Hussein L. Dimaayao"
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:h-80 lg:w:10 lg:mr-8 rounded-full md:rounded-full lg:rounded-none mt-3 md:mt-3 lg:mt-0
          object-cover shadow-[0px_0px_6px_9px_#1c4be6] sm:shadow-[0px_0px_6px_9px_#1c4be6] md:shadow-[0px_0px_6px_9px_#1c4be6] lg:shadow-none hover:scale-105 transition-transform duration-150"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
