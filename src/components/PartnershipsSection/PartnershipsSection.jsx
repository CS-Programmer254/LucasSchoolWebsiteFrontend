import React, { useState } from 'react';

const partnershipsData = [
  { name: 'University of Nairobi', description: 'A long-standing educational partner with collaborative programs.', image: 'https://via.placeholder.com/150' },
  { name: 'EcoGreen Initiative', description: 'Works with us on environmental sustainability projects.', image: 'https://via.placeholder.com/150' },
  // You can add more partnerships here if needed
];

function PartnershipsSection() {
  const [showMorePartners, setShowMorePartners] = useState(false);

  return (
    <section className="mt-16 px-6 lg:px-20">
      <h2 className="text-4xl font-bold mb-8 text-[#8B0000] text-center">Our Partnerships</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partnershipsData.slice(0, showMorePartners ? partnershipsData.length : 4).map((partner, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full text-center bg-white p-6 rounded-lg shadow-lg hover:bg-[#f3f3f3] ease-in-out"
            style={{
              background: "linear-gradient(135deg, rgba(255, 182, 193, 0.2), rgba(255, 182, 193, 0.1))",
              border: "2px solid rgba(139, 0, 0, 0.3)",
              boxShadow: "0px 4px 8px rgba(139, 0, 0, 0.1)"
            }}
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-32 h-32 rounded-full mb-4 mx-auto transition-all duration-300"
            />
            <strong className="block text-lg text-[#8B0000]">{partner.name}</strong>
            <p className="text-sm text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowMorePartners(!showMorePartners)}
        className="mt-8 text-[#8B0000] font-semibold py-2 px-4 border border-[#8B0000] rounded-md hover:bg-[#8B0000] hover:text-white transition-all duration-300"
      >
        {showMorePartners ? 'Show Less' : 'Show More Partnerships'}
      </button>
    </section>
  );
}

export default PartnershipsSection;
