import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className='bg-blue-800 p-4 fixed w-full text-white shadow-md z-50'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-xl'>CreateA.Img</div>
          <nav className='hidden md:flex space-x-4'>
            <a
              href='#home'
              className='hover:text-blue-300 rounded px-3 py-1 transition-colors duration-200'
            >
              Home
            </a>
            <a
              href='#about'
              className='hover:text-blue-300 rounded px-3 py-1 transition-colors duration-200'
            >
              About
            </a>
            <a
              href='#features'
              className='hover:text-blue-300 rounded px-3 py-1 transition-colors duration-200'
            >
              Features
            </a>
            <a
              href='#pricing'
              className='hover:text-blue-300 rounded px-3 py-1 transition-colors duration-200'
            >
              Pricing
            </a>
            <a
              href='#contact'
              className='hover:text-blue-300 rounded px-3 py-1 transition-colors duration-200'
            >
              Contact
            </a>
          </nav>
          <div className='hidden md:flex space-x-4'>
            <button className='bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200'>
              Sign Up
            </button>
            <button className='bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200'>
              Sign In
            </button>
          </div>
          <button
            className='md:hidden text-white'
            onClick={handleMobileMenu}
            aria-label='Mobile menu icon'
          >
            <FaBars size={24} />
          </button>
        </div>
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className='md:hidden'>
            <div className='mt-2 py-3 px-4 bg-blue-700 rounded-md'>
              <a
                href='#home'
                className='block text-white font-semibold mb-2 hover:text-blue-300'
              >
                Home
              </a>
              <a
                href='#about'
                className='block text-white font-semibold mb-2 hover:text-blue-300'
              >
                About
              </a>
              <a
                href='#features'
                className='block text-white font-semibold mb-2 hover:text-blue-300'
              >
                Features
              </a>
              <a
                href='#pricing'
                className='block text-white font-semibold mb-2 hover:text-blue-300'
              >
                Pricing
              </a>
              <a
                href='#contact'
                className='block text-white font-semibold mb-2 hover:text-blue-300'
              >
                Contact
              </a>
              <button className='block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mt-4 w-full'>
                Sign Up
              </button>
              <button
            className='block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mt-2 w-full'
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  </header>
  );
};

export default Navbar;