import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Jairosoft from "../images/Jairosoft.jpg";
import DL from "../images/DL.jpg";
import Exhibit from "../images/Exhibit.jpg";
import Agile from "../images/Agile.jpg";

const certifications = [
  {
    title: "Software Quality Assurance",
    issuer: "Jairosoft",
    date: "December 2025",
    image: Jairosoft,
  },
  {
    title: "Academic Award - Dean's Lister",
    issuer: "Mindanao State University - Main Campus",
    date: "July 2022",
    image: DL,
  },
  {
    title: "Emerging Technologies and Trends",
    issuer: "Mindanao State University - Main Campus",
    date: "February 2024",
    image: Exhibit,
  },
  {
    title: "Agile Methodologies and Emerging Web Technology",
    issuer: "Mindanao State University - Main Campus",
    date: "March 2024",
    image: Agile,
  },
];

const Certification = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="certification"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 py-20 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
          Certifications
        </h2>
        <p className="text-slate-400 mt-4 text-sm sm:text-base">
          Continuous learning and professional growth
        </p>
      </div>

      {/* ===== Peek Carousel ===== */}
      <div className="relative w-full max-w-6xl h-[450px] mx-auto flex items-center justify-center overflow-hidden">

        {certifications.map((cert, index) => {
          const isActive = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + certifications.length) %
              certifications.length;
          const isRight =
            index === (currentIndex + 1) % certifications.length;

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
                  ? -400
                  : isRight
                  ? 400
                  : 0,
                zIndex: isActive ? 10 : 5,
              }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="bg-slate-800 rounded-2xl w-[260px] sm:w-[350px] overflow-hidden shadow-lg border border-blue-500/20">
                <div className="h-56 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    {cert.date}
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

      {/* ===== Modal Preview ===== */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-2xl hover:text-red-400 transition"
          >
            <FaTimes />
          </button>

          <motion.img
            src={selectedImage}
            alt="Certificate Preview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Certification;