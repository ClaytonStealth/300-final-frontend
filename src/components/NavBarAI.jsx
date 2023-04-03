import React from "react";

const NavBarAI = () => {
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
          <button className='md:hidden'>{/* Mobile menu icon */}</button>
        </div>
        {/* Mobile menu */}
      </div>
    </header>
  );
};

export default NavBarAI;
