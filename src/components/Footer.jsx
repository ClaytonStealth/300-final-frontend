import React from "react";

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h2 className='text-xl font-bold mb-4'>CreateA.Img</h2>
            <p className='text-sm'>
              We help professionals create stunning images with AI-driven
              technology.
            </p>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  Email
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  Phone
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-8 border-t border-slate-700' />
        <div className='text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} CreateA.Img. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
