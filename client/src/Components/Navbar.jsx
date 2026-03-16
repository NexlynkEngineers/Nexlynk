import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Students', path: '/students' },
  { name: 'Companies', path: '/companies' },
  { name: 'Pricing', path: '/pricing' },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-[18px] ">
      {/* Logo linking to home */}
      <Link to="/" className="flex items-center gap-2.5">
        <img src={logo} alt="NexlyLink" className="h-8 w-auto" />
      </Link>

      {/* Nav pill */}
      <div className="flex items-center gap-0.5 rounded-full bg-dark px-2 py-1.5">
        {NAV_LINKS.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `rounded-full px-[15px] py-[7px] text-[13.5px] font-medium no-underline transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-light hover:text-white'
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </div>

      {/* Contact button as a NavLink */}
      <NavLink
        to="/contact"
        className="cursor-pointer rounded-full border-none bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f3a8a]"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;