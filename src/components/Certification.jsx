import React, {useState} from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Jairosoft from "../images/Jairosoft.jpg";
import DL from "../images/DL.jpg";
import Exhibit from "../images/Exhibit.jpg";
import Agile from "../images/Agile.jpg";


const certifications = [
  {
    title: "Software Quality Assurance",
    issuer: "Jairosoft",
    date: "December 2025",
    image: Jairosoft, // put your image inside public/certificates
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

  return (
    <section
      id="certification"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 sm:px-10 md:px-16 py-16"
    >
      {/* === Section Title === */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">
          Certifications
        </h2>
        <p className="text-slate-400 mt-4 text-sm sm:text-base">
          Continuous learning and professional growth
        </p>
      </div>

      {/* === Certification Cards === */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            {/* Certificate Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certificate Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                {cert.issuer}
              </p>
              <p className="text-slate-500 text-xs mt-1">
                {cert.date}
              </p>

              {/* View Button */}
             <button
                onClick={() => setSelectedImage(cert.image)}
                className="inline-block mt-4 px-4 py-2 text-sm border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-2xl hover:text-red-400 transition"
          >
            <FaTimes />
          </button>

          {/* Certificate Image */}
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