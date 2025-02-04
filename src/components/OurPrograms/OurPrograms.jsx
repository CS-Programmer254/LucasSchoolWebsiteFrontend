import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCloud,
  FaChalkboardTeacher,
  FaBusinessTime,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaGraduationCap />,
    title: "Early Childhood Development (ECDE)",
    description:
      "Our ECDE program prepares educators to nurture young minds in the critical early years of a child’s development. Gain hands-on experience to shape future leaders.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Junior Secondary School (JSS) - Up to Grade 9",
    description:
      "Designed for students transitioning from primary education, emphasizing both academic and life skills essential for future success.",
  },
  {
    icon: <FaCloud />,
    title: "Computer Lessons",
    description:
      "Covers everything from basic computer skills to advanced IT concepts. Learn essential software, programming, and digital tools for the modern world.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Extracurricular Activities",
    description:
      "Provides a wide range of opportunities to develop interests and talents outside the classroom, fostering leadership and teamwork.",
  },
  {
    icon: <FaBusinessTime />,
    title: "Lunch Programs",
    description:
      "Ensures students receive balanced meals while fostering social interaction and community building for academic success.",
  },
];

function OurPrograms() {
  return (
    <section
      className="py-16 px-6 lg:px-20 bg-gradient-to-r from-[#800000] to-[#FFB6C1] text-white"
      style={{ borderRadius: "10px", marginTop: "50px" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Programs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 shadow-lg rounded-xl transform transition-all duration-500 ease-in-out text-gray-900"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-[#800000] text-5xl mb-4 mx-auto flex justify-center">
                {program.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
              <p className="text-lg">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPrograms;
