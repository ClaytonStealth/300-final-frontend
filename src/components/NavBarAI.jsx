import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header
      className='bg-gradient-to-r from-blue-600 to-blue-800 p-4 fixed w-full text-white shadow-md z-50'
      style={{ transition: "background 0.5s ease" }}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div
            className='font-bold my-class text-xl hover:text-blue-300 transition-colors duration-200'
            style={{ transition: "color 0.5s ease" }}
          >
            CreateA.Img
          </div>
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
            <button
              className='bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded hover:from-blue-700 hover:to-blue-800 transition-all duration-300'
              style={{ transition: "background 0.5s ease" }}
            >
              Sign Up
            </button>
            <button
              className='bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded hover:from-blue-700 hover:to-blue-800 transition-all duration-300'
              style={{ transition: "background 0.5s ease" }}
            >
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
          {/* <button className='relative inline-block px-4 py-2 border-2 border-blue-500 text-blue-500 font-bold uppercase transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-500'>
            <span className='absolute inset-y-0 left-0 z-[-1] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full'></span>
            Hover me
          </button> */}
          {/* <div className='relative group'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-blue-500'>
              Build with us
            </button>
            <span className='before-slide group-hover:translate-x-full'></span>
          </div> */}
          <div className='relative inline-block'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-lg slide-button'>
              Build with us
            </button>
          </div>
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
              <button className='block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mt-2 w-full'>
                Sign Up
              </button>
              <button className='block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mt-2 w-full'>
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
