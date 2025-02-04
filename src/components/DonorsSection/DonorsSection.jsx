import React from 'react';
import './DonorSection.css';

const donorsData = [
  { name: 'Microsoft', description: 'Educational programs & scholarships.', image: 'https://via.placeholder.com/50' },
  { name: 'TechCorp Inc.', description: 'Supports tech initiatives.', image: 'https://via.placeholder.com/50' },
  { name: 'Global Foundation', description: 'Funds educational projects.', image: 'https://via.placeholder.com/50' },
  { name: 'EduTech Solutions', description: 'Enhances educational technology.', image: 'https://via.placeholder.com/50' },
  { name: 'Amazon', description: 'E-commerce & logistics education.', image: 'https://via.placeholder.com/50' },
  { name: 'Apple', description: 'Tech innovation training.', image: 'https://via.placeholder.com/50' },
];

function DonorsSection() {
  return (
    <section className="mt-16 px-6 lg:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center bg-white text-[#8B0000] py-2 rounded-md">Thank You, Our Donors</h2>

      <div className="relative overflow-hidden">
        <div className="donor-container flex">
          {/* Display only the first 5 sponsors */}
          <div className="donor-list flex">
            {donorsData.slice(0, 5).map((donor, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-auto text-center p-4 rounded-lg bg-white mx-4"
                style={{
                  boxShadow: "0px 4px 8px rgba(139, 0, 0, 0.3)",
                }}
              >
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="w-16 h-16 rounded-full mb-2 mx-auto transition-all duration-300 border-4 border-[#D9708B]"
                />
                <strong className="block text-lg text-[#8B0000]">{donor.name}</strong>
                <p className="text-gray-600 text-sm">{donor.description}</p>
              </div>
            ))}
          </div>
          {/* Duplicate the list to make the scroll effect seamless */}
          <div className="donor-list flex">
            {donorsData.slice(0, 5).map((donor, index) => (
              <div
                key={`duplicate-${index}`}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-auto text-center p-4 rounded-lg bg-white mx-4"
                style={{
                  boxShadow: "0px 4px 8px rgba(139, 0, 0, 0.3)",
                }}
              >
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="w-16 h-16 rounded-full mb-2 mx-auto transition-all duration-300 border-4 border-[#D9708B]"
                />
                <strong className="block text-lg text-[#8B0000]">{donor.name}</strong>
                <p className="text-gray-600 text-sm">{donor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonorsSection;
