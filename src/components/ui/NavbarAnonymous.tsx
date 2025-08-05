import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import clsx from 'clsx';

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");

  const handleJoinClick = () => {
    // Navigate to login page - you can replace this with your routing logic
    window.location.href = '/login';
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">
            PetitionsPro.
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ScrollLink 
            to="home" smooth={true} duration={350}
            onClick={() => setIsActive("home")}
            className={clsx(isActive=='home'?'text-blue-500':'text-gray-500',"font-medium hover:text-blue-600 transition-colors")}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about" smooth={true} duration={350}
            onClick={() => setIsActive("about")}
            className={clsx(isActive=='about'?'text-blue-500':'text-gray-500',"font-medium hover:text-blue-600 transition-colors")}
          >
            About
          </ScrollLink>
          <ScrollLink 
            to="how-it-works" smooth={true} duration={350}
            onClick={() => setIsActive("how-it-works")}
            className={clsx(isActive=='how-it-works'?'text-blue-500':'text-gray-500',"font-medium hover:text-blue-600 transition-colors")}
          >
            How it Works
          </ScrollLink>
          <ScrollLink 
            to="benefits" smooth={true} duration={350}
            onClick={() => setIsActive("benefits")}
            className={clsx(isActive=='benefits'?'text-blue-500':'text-gray-500',"font-medium hover:text-blue-600 transition-colors")}
          >
            Benefits
          </ScrollLink>
          <ScrollLink 
            to="pricing" smooth={true} duration={350}
            onClick={() => setIsActive("pricing")}
            className={clsx(isActive=='pricing'?'text-blue-500':'text-gray-500',"font-medium hover:text-blue-600 transition-colors")}
          >
            Price
          </ScrollLink>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/attorney-portal" 
            className="text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-300 px-6 py-2 rounded-lg transition-colors"
          >
            Attorney Portal
          </Link>
          <Link 
            to="/user-portal" 
            className="text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-300 px-6 py-2 rounded-lg transition-colors"
          >
            User Portal
          </Link>
          <button
            onClick={handleJoinClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Join for Free
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;