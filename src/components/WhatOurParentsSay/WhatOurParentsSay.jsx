import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

function WhatOurParentsSay() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // You can enable arrows if needed
  };

  const testimonials = [
    {
      name: "Dr.Wilson Ramata",
      role: "Parent",
      feedback: "The programs here have helped my child not only academically but also emotionally. The team is wonderful and dedicated to every student's success.",
    },
    {
      name: "Mr.Samuel Morara",
      role: "Parent",
      feedback: "I am incredibly proud of the growth my daughter has shown. The staff truly cares about the development of every student. I highly recommend the programs!",
    },
    {
      name: "Miss Lenah Mabatha Kikwatha",
      role: "Parent",
      feedback: "As a parent, it gives me peace of mind to know my child is in good hands. The extracurricular activities and academic rigor are unmatched.",
    },
    {
      name: "Eng.Stanley Oduor",
      role: "Parent",
      feedback: "The curriculum is not only academically rigorous but also promotes critical thinking. My son has become more confident in his abilities.",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#800000]">What Our Parents Say</h2>
        <p className="text-lg mb-12 text-gray-600">Trusted by 200+ parents and over 1800 students. Here's why they recommend our programs:</p>

        <Slider {...settings} className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out ${
                index % 2 === 0 ? 'bg-gradient-to-br from-[#800000] to-[#FFB6C1]' : 'bg-gradient-to-br from-[#FFB6C1] to-[#800000]'
              }`}
              style={{
                background: 'linear-gradient(135deg, #FFB6C1 20%, #800000 80%)', // gradient with the edges having a sprinkle effect
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              {/* Displaying 5 stars */}
              <div className="mb-4 flex justify-center">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-[#FF69B4] text-3xl" />
                  ))}
              </div>
              <p className="text-xl italic mb-4 text-white">"{testimonial.feedback}"</p> {/* Comment text set to white */}
              <div>
                <p className="font-semibold text-lg text-white">{testimonial.name}</p> {/* Name set to white */}
                <p className="text-sm text-white">{testimonial.role}</p> {/* Role set to white */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default WhatOurParentsSay;
