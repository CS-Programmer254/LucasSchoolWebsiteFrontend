import React, { useState } from 'react';

const staff = {
  boardMembers: [
    { name: 'Dr. Alice Johnson', position: 'Chairperson', description: 'Leads the board and oversees school policies.', image: 'https://via.placeholder.com/150' },
    { name: 'Mr. Robert Miller', position: 'Secretary', description: 'Handles all administrative tasks for the board.', image: 'https://via.placeholder.com/150' },
  ],
  headMaster: [
    { name: 'Mr. James Carter', position: 'Head Master', description: 'Manages school operations and curriculum implementation.', image: 'https://via.placeholder.com/150' },
  ],
  deputy: [
    { name: 'Ms. Emma Stone', position: 'Deputy Head Master', description: 'Assists the Head Master with daily administrative duties.', image: 'https://via.placeholder.com/150' },
  ],
  teachers: [
    { name: 'Mr. John Doe', position: 'Math Teacher', description: 'Teaches mathematics and conducts exam evaluations.', image: 'https://via.placeholder.com/150' },
    { name: 'Ms. Sarah Lee', position: 'Science Teacher', description: 'Specializes in biology and physics lessons.', image: 'https://via.placeholder.com/150' },
    { name: 'Mr. David Smith', position: 'English Teacher', description: 'Teaches English literature and grammar.', image: 'https://via.placeholder.com/150' },
  ],
};

function StaffSection() {
  const [showMore, setShowMore] = useState(false);
  const allStaff = [...staff.boardMembers, ...staff.headMaster, ...staff.deputy, ...staff.teachers];

  const truncateDescription = (description) => {
    return description.length > 100 ? `${description.substring(0, 100)}...` : description;
  };

  return (
    <section
      className="py-20 px-6 lg:px-20 bg-gradient-to-r from-[#800000] to-[#FFB6C1] text-white"
      style={{ borderRadius: '10px', marginTop: '50px' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-wide">Meet Our Esteemed Staff</h2>
        <p className="text-xl mb-10">Our dedicated team ensures excellence in education.</p>

        <div className="overflow-hidden pb-12 max-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allStaff.slice(0, showMore ? allStaff.length : 4).map((member) => (
              <div
                key={member.name}
                className="w-full text-center bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 mx-auto object-cover transition-all duration-300"
                />
                <strong className="block text-lg text-[#800000]">{member.name}</strong>
                <p className="text-sm text-gray-700">{member.position}</p>
                <p className="text-gray-600 text-sm mt-2">{truncateDescription(member.description)}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-8 px-8 py-4 bg-white text-[#800000] font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}

export default StaffSection;
