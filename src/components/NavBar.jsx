import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  XMarkIcon,
  Cog8ToothIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { FaBars } from "react-icons/fa";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-700 top-0  fixed drop-shadow-lg'>
      <div className=' px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center justify-between'>
          <h1 className=' text-3xl font-bold mr-4 sm:text-4xl dark:text-white'>
            CreateA.Img
          </h1>
          <ul className='hidden md:flex gap-8'>
            <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400 cursor-pointer mx-4'>
              <p to='/home'>Home</p>
            </li>
            <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400 cursor-pointer mx-4'>
              <p to='/about'>About</p>
            </li>
            <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400 cursor-pointer mx-4'>
              <p to='/support'>Support</p>
            </li>
            <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400 cursor-pointer mx-4'>
              <p to='/platforms'>Platforms</p>
            </li>
          </ul>
        </div>
        <div className=' hidden md:flex pr-4'>
          <div className='flex gap-5'></div>
          <div className='flex'>
            <div>
              <button className='border-none bg-transparent text-black mr-4 dark:text-white dark:hover:text-sky-400 px-2 py-3 '>
                Sign in
              </button>
            </div>
            <div>
              <button className='px-6 py-3 dark:hover:text-sky-400 dark:bg-sky-700/50 rounded-lg'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className='flex pr-4 md:hidden'>
          <div className=' pt-1 pr-4'></div>
          {!nav ? (
            <Cog8ToothIcon
              className='w-6 mr-6'
              onClick={() => {
                handleClick();
              }}
            />
          ) : (
            <XMarkIcon
              className='w-6 mr-6'
              onClick={() => {
                handleClick();
              }}
            />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-700 w-full px-8 md:hidden"
        }
      >
        <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400'>
          <p
            to='/home'
            onClick={() => {
              handleClick();
            }}
          >
            Home
          </p>
        </li>
        <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400'>
          <p
            to='/about'
            onClick={() => {
              handleClick();
            }}
          >
            About
          </p>
        </li>
        <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400'>
          <p
            to='/support'
            onClick={() => {
              handleClick();
            }}
          >
            Support
          </p>
        </li>
        <li className='hover:text-sky-600 dark:text-white dark:hover:text-sky-400'>
          <p
            to='/platforms'
            onClick={() => {
              handleClick();
            }}
          >
            Platforms
          </p>
        </li>
        <div className='flex flex-col my-4'>
          <div className='flex justify-between'>
            <button className=' rounded-full w-6 h-6 focus:outline-none focus:ring-2 focus:ring-black mr-4 mt-3 dark:bg-sky-700/50'>
              <ShoppingCartIcon className='w-5 pl-1' />
            </button>
          </div>

          <button
            className='bg-transparent text-sky-600 dark:text-white dark:hover:text-sky-400 px-8 py-3 my-2'
            onClick={() => {
              handleClick();
            }}
          >
            Sign In
          </button>

          <button className='px-8 py-3 dark:hover:text-sky-400 dark:bg-sky-700/50'>
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
