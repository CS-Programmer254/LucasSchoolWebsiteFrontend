import React from 'react';

function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#D9708B] to-[#F5C6D6] h-screen relative">
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <div className="relative px-6 pt-8 lg:px-8 z-998">
          <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative bg-white rounded-full px-3 py-1 text-sm text-[#8B0000] ring-1 ring-white/10 hover:ring-[#F5C6D6]/20">
                Welcome to Makini School. <a href="#" className="font-semibold text-[#F5C6D6]"><span className="text-[#FF6F91] absolute inset-0" aria-hidden="true"></span>Explore Our School Programs <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center py-10">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">Empowering Education, Shaping Future Leaders</h1>
              <p className="mt-6 text-lg font-bold sm:text-xl text-white shadow-lg">At <span className='z-2 text-white'>Makini School</span>, we strive to provide world-class education and research opportunities to foster excellence and innovation.</p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-gradient-to-r from-[#8B0000] to-[#D9708B] px-4 py-2 text-sm font-semibold text-white shadow-xl hover:bg-[#8B0000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9708B]">Contact Us Now</a>
                <a href="#" className="text-sm font-semibold text-white">Learn More <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image with Soft Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://media.istockphoto.com/id/636215476/photo/african-little-girls-are-learning-english-language-orphanage-in-kenya.jpg?s=612x612&w=0&k=20&c=Rt_LOqh_y2NPgUNtN47PBIOK_dC2Na_2DHRlsa8vqck=" alt="Makini School Banner" className="w-full h-full object-cover opacity-50" />
        {/* Softer Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-[#D9708B] opacity-40"></div>
      </div>
    </div>
  );
}

export default Banner;
