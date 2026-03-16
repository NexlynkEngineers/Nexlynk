import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'; // your logo path

const NAV_LINKS = [ "Home","About Us", "Students", "Companies", "Pricing"];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-[18px]">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="Podcast Coach" className="h-8 w-auto" />
        
      </div>

      {/* Nav pill */}
      <div className="flex items-center gap-0.5 rounded-full bg-dark px-2 py-1.5">
        {NAV_LINKS.map((item) => (
          <a
            key={item}
            href="#"
            className="rounded-full px-[15px] py-[7px] text-[13.5px] text-gray-light no-underline transition-colors hover:text-white"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Contact button */}
      <button className="cursor-pointer rounded-full border-none bg-dark px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f3a8a]">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;