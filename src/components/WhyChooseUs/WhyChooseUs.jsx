import React from 'react';
import { FaCheckCircle, FaDumbbell, FaMusic, FaPaintBrush, FaMountain, FaSwimmingPool } from 'react-icons/fa'; // Importing from FontAwesome

function WhyChooseUs() {
  return (
    <section className="relative py-16 px-6 lg:px-20 bg-gradient-to-r from-[#800000] to-[#FFB6C1] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative flex items-stretch">
        
        {/* Left Section (Why Choose Us - 1/2 Width) */}
        <div className="w-1/2 bg-[#800000] p-8 shadow-xl relative z-10 text-white rounded-xl transform transition-all hover:scale-105 duration-500 ease-in-out"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
          <h2 className="text-3xl font-bold border-b-4 border-[#FFB6C1] inline-block pb-2 mb-4">Why Choose Us?</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#FFB6C1]" size={20} />
              World-class academic curriculum with top-tier educators.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#FFB6C1]" size={20} />
              Strong emphasis on innovation, technology, and research.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#FFB6C1]" size={20} />
              A supportive learning environment fostering excellence.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#FFB6C1]" size={20} />
              Modern infrastructure equipped with the latest educational tools.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#FFB6C1]" size={20} />
              Highly experienced faculty committed to student success.
            </li>
          </ul>
        </div>

        {/* Right Section (Recreational Facilities - 1/2 Width with Triangular Slice) */}
        <div className="w-1/2 bg-white text-gray-900 shadow-xl flex items-center justify-center p-8 relative rounded-xl transform transition-all hover:scale-105 duration-500 ease-in-out"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold border-b-4 border-[#800000] inline-block pb-2 mb-4">Recreational Facilities</h2>
            <ul className="mt-4 space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <FaDumbbell className="text-[#800000]" size={20} />
                Well-equipped sports complex
              </li>
              <li className="flex items-center gap-3">
                <FaSwimmingPool className="text-[#800000]" size={20} />
                Swimming pool & aquatic center
              </li>
              <li className="flex items-center gap-3">
                <FaPaintBrush className="text-[#800000]" size={20} />
                Drama & art clubs
              </li>
              <li className="flex items-center gap-3">
                <FaMusic className="text-[#800000]" size={20} />
                Music & dance programs
              </li>
              <li className="flex items-center gap-3">
                <FaMountain className="text-[#800000]" size={20} />
                Outdoor adventure & hiking clubs
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Background multimedia content (Video or Image) */}
      <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>

      {/* Animation for section entrance */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFB6C1] to-[#800000] opacity-0 transition-all duration-1000 ease-in-out"></div>
    </section>
  );
}

export default WhyChooseUs;
