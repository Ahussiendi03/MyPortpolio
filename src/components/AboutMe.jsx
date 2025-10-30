import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "../images/Profile.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const skills = [
    <FaReact className="text-cyan-400" />,
    <FaNodeJs className="text-green-500" />,
    <SiExpress className="text-gray-300" />,
    <SiMongodb className="text-green-400" />,
    <SiTailwindcss className="text-sky-400" />,
    <FaHtml5 className="text-orange-500" />,
    <FaCss3Alt className="text-blue-500" />,
    <FaJsSquare className="text-yellow-400" />,
    <FaGitAlt className="text-orange-500" />,
    <FaGithub className="text-white" />,
    <SiPostman className="text-orange-400" />,
    <VscAzureDevops className="text-blue-400" />,
  ];

  return (
    <section
      id="About"
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-5 sm:px-10 md:px-16 lg:px-20 py-14 sm:py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* ===== Profile Image ===== */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative flex justify-center items-center">
          <div className="absolute bg-blue-500/20 blur-3xl rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 animate-pulse"></div>
          <img
            src={Profile}
            alt="Amer Hussein L. Dimaayao"
            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-[0px_0px_6px_8px_#1c4be6] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      {/* ===== Text Section ===== */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-400">
          About Me
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl">
          Detail-oriented and motivated IT professional with hands-on experience
          as a{" "}
          <span className="text-blue-400 font-semibold">
            Software Quality Assurance (SQA) Manual Tester Intern at Jairosoft
          </span>
          , utilizing Azure DevOps Services for creating and managing test
          cases, bugs, and defects. Gained a strong foundation in
          <span className="text-blue-400"> web development</span> and
          <span className="text-blue-400"> database management</span> during
          college, with experience in designing database schemas and developing
          user-friendly web applications. Committed to ensuring software
          quality, improving processes, and contributing effectively to team
          success in a professional environment.
        </p>

        {/* ===== Sliding Skill Icons ===== */}
        <div className="w-full overflow-hidden mt-6 mb-8">
          <motion.div
            className="flex gap-6 sm:gap-8 md:gap-10 text-2xl sm:text-3xl md:text-4xl whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...skills, ...skills].map((icon, index) => (
              <span
                key={index}
                className="hover:scale-110 transition-transform duration-300"
              >
                {icon}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.button
          onClick={() => {
            const section = document.querySelector("#Skills");
            if (section) {
              const offset = -70;
              const top =
                section.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 sm:px-6 py-2 border-2 border-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-transform hover:-translate-y-1 text-sm sm:text-base"
        >
          MY SKILLS
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutMe;
