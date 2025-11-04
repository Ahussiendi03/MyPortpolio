import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import ProjectImg from "../images/project.png";
import PrionTask from "../images/PrionTask.png";
import LoginForm from "../images/LoginForm.png";

const Project = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState(null);

  const techStack = [
    { name: "React JS (Vite)", icon: <SiReact className="text-blue-400" /> },
    { name: "Node JS", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ];

  const projects = [
    {
      img: ProjectImg,
      title: "MSU CampusGigs",
      subtitle: "Capstone Project • MSU Main Campus",
      description:
        "A web-based platform designed to help undergraduate students at MSU Main Campus find part-time job opportunities within the university. Students can browse gigs, apply easily, and manage job listings while employers post and track applications efficiently.",
      link: "https://github.com/Ahussiendi03/CampusGigs",
    },
    {
      img: PrionTask,
      title: "PrionTask",
      subtitle: "Personal Project",
      description:
        "PrionTask is a modern task management platform that helps users stay productive and organized. It allows users to create, track, and manage daily tasks efficiently with features such as task prioritization, progress tracking, and user-specific dashboards.",
      link: "https://github.com/Ahussiendi03/MindTaskY",
    },
    {
      img: LoginForm,
      title: "Email Notification System",
      subtitle: "Personal Project",
      description:
        "An Email Notification System built with Node.js and Nodemailer that automates the process of sending emails for various purposes such as account verification, password resets, and promotional campaigns. It ensures reliable and timely email delivery to users.",
      link: "https://github.com/Ahussiendi03/LoginFormWithNotification"
    }
  ];

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <section
      id="Projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden w-full"
    >
      {/* ===== Section Title ===== */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-blue-400 mb-12 text-center"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      {/* ===== Project Grid ===== */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-slate-800/70 border border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-blue-400 text-xs font-medium mb-3">
                {project.subtitle}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="text-sm text-blue-400 font-medium hover:underline">
                Click to Preview →
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Modal for Project Preview ===== */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-slate-900 rounded-2xl max-w-lg w-full p-6 relative border border-blue-500/40 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >

            {/* Project Image */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Project Details */}
            <h3 className="text-2xl font-bold mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-blue-400 text-sm mb-4">
              {selectedProject.subtitle}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-700 text-slate-200 text-xs border border-blue-400/40"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-end gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-all"
              >
                <FaGithub /> GitHub
              </a>
              <button
              onClick={() => setSelectedProject(null)}
              className="bg-red-600 px-5 py-2 rounded-full text-white hover:bg-red-700 transition-all"
            >
              Close
            </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Project;
