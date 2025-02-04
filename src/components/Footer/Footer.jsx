import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* School Name */}
        <p className="text-3xl font-bold text-[#800000]">Makini School</p>

        {/* Copyright and Developed By Text */}
        <p className="text-lg text-gray-600 mb-4">All rights reserved 2025</p>
     
      

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="https://facebook.com"
            className="text-3xl text-[#800000] hover:text-[#FFB6C1] transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="text-3xl text-[#800000] hover:text-[#FFB6C1] transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            className="text-3xl text-[#800000] hover:text-[#FFB6C1] transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Tagline or Mission Statement */}
        <p className="text-lg text-gray-600 mt-4">
          Your destination for innovative and impactful education. Let’s build a better future together.
        </p>
        <p className="text-lg text-gray-600 mb-4">Developed by Eng. Stanley Oduor(0769860886)</p>
      </div>
    </footer>
  );
}

export default Footer;
