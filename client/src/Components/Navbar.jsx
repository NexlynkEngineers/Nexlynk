import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/logo.png"

export default function Navbar() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/students', label: 'Students' },
    { path: '/companies', label: 'Companies' },
    { path: '/admins', label: 'Admins' },
    { path: '/pricing', label: 'Pricing' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo/Link to Home - Wrapped in Link for navigation */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="NexlyLink" 
            className="h-20  w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-xl font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
          >
            Log in
          </Link>
          <Link 
            to="/signup"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}