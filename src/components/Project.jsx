import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
  const [currentIndex, setCurrentIndex] = useState(0);

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
        "A web-based platform helping students find campus part-time jobs efficiently.",
      link: "https://github.com/Ahussiendi03/CampusGigs",
    },
    {
      img: PrionTask,
      title: "PrionTask",
      subtitle: "Personal Project",
      description:
        "A modern task management platform with prioritization and tracking.",
      link: "https://github.com/Ahussiendi03/MindTaskY",
    },
    {
      img: LoginForm,
      title: "Email Notification System",
      subtitle: "Personal Project",
      description:
        "Node.js email automation for verification and password reset.",
      link: "https://github.com/Ahussiendi03/LoginFormWithNotification",
    },
  ];

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="Projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-blue-400 mb-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* ===== Peek Carousel ===== */}
      <div className="relative w-full max-w-6xl h-[420px] flex items-center justify-center overflow-hidden">

        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + projects.length) % projects.length;
          const isRight =
            index === (currentIndex + 1) % projects.length;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              animate={{
                scale: isActive ? 1.05 : 0.8,
                opacity: isActive ? 1 : 0.4,
                x: isActive
                  ? 0
                  : isLeft
                  ? -350
                  : isRight
                  ? 350
                  : 0,
                zIndex: isActive ? 10 : 5,
              }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-slate-800 border border-blue-400/30 rounded-2xl w-[260px] sm:w-[320px] overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-xs mb-2">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-10 bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition z-20"
        >
          <FaArrowLeft />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-10 bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition z-20"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* ===== Modal ===== */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-blue-500/40 shadow-lg">
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-blue-400 text-sm mb-4">
              {selectedProject.subtitle}
            </p>
            <p className="text-slate-300 text-sm mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700 text-xs"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;