import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-300 p-4'>
        <div className='container mx-auto'>
          {/* Links and contact info */}
          <div className='flex justify-between items-center'>
            <div>
              <a href='/privacy-policy' className='mr-4'>
                Privacy Policy
              </a>
              <a href='/terms-of-service'>Terms of Service</a>
            </div>
            <div>
              <a href='mailto:contact@createaimg.com' className='mr-4'>
                Email Us
              </a>
              <a href='/support'>Support</a>
            </div>
            <div>
              {/* Social media icons */}
              <a href='https://facebook.com/createaimg' className='mr-4'>
                Facebook
              </a>
              <a href='https://twitter.com/createaimg' className='mr-4'>
                Twitter
              </a>
              <a href='https://linkedin.com/company/createaimg'>LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
