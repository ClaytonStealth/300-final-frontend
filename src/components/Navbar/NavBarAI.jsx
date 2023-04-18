import React, { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

import { FaBars, FaUser } from "react-icons/fa";
import "./Navbar.css";
import LoginModal from "../LoginModal";
import UserProfile from "../UserProfile";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const login = useContext(LoginContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const auth = useContext(AuthContext);
  console.log(auth.isAuth);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header
        className='custom-navbar bg-gray-900 p-4 fixed w-full text-white shadow-md z-50'
        style={{ transition: "background 0.5s ease" }}
      >
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div
              className='font-bold text-xl hover:text-gradient transition-colors duration-200'
              style={{
                background:
                  "linear-gradient(to right, #8A2387, #E94057, #F27121)",
                "-webkit-background-clip": "text",
                color: "transparent",
                transition: "color 0.5s ease",
              }}
            >
              CreateA.Img
            </div>
            <nav className='hidden md:flex space-x-4'>
              <a
                href='#home'
                className='text-gradient-hover rounded px-3 py-1 transition-colors duration-200'
                data-text='Home'
              >
                Home
              </a>
              <a
                href='#about'
                className='text-gradient-hover rounded px-3 py-1 transition-colors duration-200'
                data-text='About'
              >
                About
              </a>
              <a
                href='#features'
                className='text-gradient-hover rounded px-3 py-1 transition-colors duration-200'
                data-text='Features'
              >
                Features
              </a>
              <a
                href='#pricing'
                className='text-gradient-hover rounded px-3 py-1 transition-colors duration-200'
                data-text='Pricing'
              >
                Pricing
              </a>
              <a
                href='#contact'
                className='text-gradient-hover rounded px-3 py-1 transition-colors duration-200'
                data-text='Contact'
              >
                Contact
              </a>
            </nav>
            <div className='hidden md:flex space-x-4'>
              <div className='relative inline-flex items-center gap-8'>
                {auth.isAuth && (
                  <FaUser
                    size={24}
                    className={`mr-2 text-white animate-pulse`}
                    onClick={() => setIsUserProfileOpen(true)}
                  />
                )}

                <button
                  className='px-4 py-2 rounded-lg gradient-button'
                  onClick={() => setIsModalOpen(true)}
                >
                  Sign In
                </button>
              </div>
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
              <div className='mt-2 py-3 px-4 bg-gray-800 rounded-md'>
                <a
                  href='#home'
                  className='block text-white font-semibold mb-2 text-gradient-hover'
                  data-text='Home'
                >
                  Home
                </a>
                <a
                  href='#about'
                  className='block text-white font-semibold mb-2 text-gradient-hover'
                  data-text='About'
                >
                  About
                </a>
                <a
                  href='#features'
                  className='block text-white font-semibold mb-2 text-gradient-hover'
                  data-text='Features'
                >
                  Features
                </a>
                <a
                  href='#pricing'
                  className='block text-white font-semibold mb-2 text-gradient-hover'
                  data-text='Pricing'
                >
                  Pricing
                </a>
                <a
                  href='#contact'
                  className='block text-white font-semibold mb-2 text-gradient-hover'
                  data-text='Contact'
                >
                  Contact
                </a>

                <div className='flex justify-between items-center mt-2'>
                  {auth.isAuth && (
                    <FaUser
                      size={24}
                      className={"text-white animate-ping"}
                      onClick={() => setIsUserProfileOpen(true)}
                    />
                  )}
                  <button
                    className='gradient-button px-4 py-2 rounded'
                    onClick={() => setIsModalOpen(true)}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <UserProfile
        isOpen={isUserProfileOpen}
        onClose={() => setIsUserProfileOpen(false)}
      />
    </>
  );
};

export default Navbar;
