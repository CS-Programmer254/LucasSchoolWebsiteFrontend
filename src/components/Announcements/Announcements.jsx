import React from 'react';
import './announcements.css';


// Sample announcements
const announcements = [
  "Admissions for the new term are open! Apply now.",
  "Join our Parents' Meeting on August 25th.",
  "Congratulations to our students for excelling in national exams!",
  "New extracurricular clubs are starting this month!",
];

function Announcements() {
  return (
    <div className="bg-white text-[#8B0000] py-4 px-8 rounded-lg mb-8 shadow-lg">
      <h3 className="text-2xl font-bold text-center">Latest Announcements</h3>
      <div className="overflow-hidden relative mt-2 h-12">
        <div className="animate-scrollTicker flex">
          {announcements.map((announcement, index) => (
            <div key={index} className="text-lg font-semibold text-gray-600 whitespace-nowrap mr-12">{announcement}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Announcements;
