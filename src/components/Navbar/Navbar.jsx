import React from 'react';

function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-4 lg:px-8 pt-4 bg-gradient-to-r from-[#8B0000] to-[#D9708B] shadow-lg" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Makini School</span>
            <img className="h-8 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7T4VmqlOHQPEY269MT_g8dYYHuiU1Y5UnJA&s" alt="Makini Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-[#FF6F91]">
            <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          <a href="#" className="text-sm font-semibold text-white hover:text-[#FF6F91]">Location</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-[#FF6F91]">Programs</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-[#FF6F91]">Admission</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-[#FF6F91]">Mode of Fee Payment</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-[#FF6F91]">Recreational Facilities</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-[#FF6F91]">Inquiries/Chat</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-white hover:text-[#FF6F91]">Blog</a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
