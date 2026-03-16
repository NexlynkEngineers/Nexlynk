import React from 'react';
import { Link } from 'react-router';
import { FiMail, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-dark text-gray-light overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand and newsletter */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="NexlyLink" className="h-10 text-white w-auto" />
            </Link>
            <p className="text-gray-light mb-6 max-w-md">
              The next‑generation placement platform connecting engineers with companies they'll love.
            </p>

            {/* Email signup */}
            <div className="max-w-md">
              <h4 className="text-white font-semibold mb-3">Stay in the loop</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-muted" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-light/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <button className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/80 transition-colors shadow-lg">
                  Subscribe
                </button>
              </div>
             
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-gray-light hover:text-white transition">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-light hover:text-white transition">Pricing</Link></li>
                <li><Link to="/security" className="text-gray-light hover:text-white transition">Security</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-light hover:text-white transition">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-light hover:text-white transition">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-light hover:text-white transition">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-light hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Resources & Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><Link to="/help" className="text-gray-light hover:text-white transition">Help Center</Link></li>
                <li><Link to="/privacy" className="text-gray-light hover:text-white transition">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-light hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-light/60">
            &copy; {new Date().getFullYear()} NexlyLink. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-white transition p-2 -m-2"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-white transition p-2 -m-2"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-white transition p-2 -m-2"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;