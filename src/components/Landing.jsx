import React from "react";

function LandingPage() {
  return (
    <div className='custom-landing-page bg-transparent min-h-screen'>
      <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen'>
        <section className='custom-section h-screen flex flex-col justify-center items-center'>
          <div className='container mx-auto text-white'>
            <h1 className='text-4xl font-bold text-center mb-4'>
              Create Stunning Images with CreateA.Img
            </h1>
            <p className='text-xl text-center mb-8'>
              AI-driven image generation for professional photos and marketing
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-white p-4 rounded shadow-md'>
                <h3 className='text-slate-900 text-center mb-4'>Input Image</h3>
                <img
                  src='https://source.unsplash.com/featured/?camera'
                  alt='Input Image'
                  className='w-full h-64 object-cover rounded'
                />
              </div>
              <div className='bg-white p-4 rounded shadow-md'>
                <h3 className='text-slate-900 text-center mb-4'>
                  AI-Generated Image
                </h3>
                <img
                  src='https://source.unsplash.com/featured/?generated'
                  alt='AI-Generated Image'
                  className='w-full h-64 object-cover rounded'
                />
              </div>
            </div>
            <button className='gradient-button px-8 py-2 rounded'>
              Try It Now
            </button>
          </div>
        </section>
        <section className='custom-section py-20 bg-slate-800'>
          <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-4 text-white'>
              Create Stunning Images with AI
            </h2>
            <p className='text-lg text-white text-center mb-8'>
              CreateA.Img is an AI-driven image generation tool that can help
              you create professional-quality photos and marketing materials.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='bg-slate-700 p-8 rounded shadow-md'>
                <h3 className='text-white text-center mb-4'>Fast</h3>
                <p className='text-lg text-white text-center mb-4'>
                  Our AI algorithms work quickly to generate high-quality images
                  in no time.
                </p>
                <img
                  src='https://source.unsplash.com/featured/?fast'
                  alt='Fast'
                  className='mx-auto h-20'
                />
              </div>
              <div className='bg-slate-700 p-8 rounded shadow-md'>
                <h3 className='text-white text-center mb-4'>Easy</h3>
                <p className='text-lg text-white text-center mb-4'>
                  CreateA.Img is easy to use and requires no technical
                  expertise.
                </p>
                <img
                  src='https://source.unsplash.com/featured/?easy'
                  alt='Easy'
                  className='mx-auto h-20'
                />
              </div>
              <div className='bg-slate-700 p-8 rounded shadow-md'>
                <h3 className='text-white text-center mb-4'>Affordable</h3>
                <p className='text-lg text-white text-center mb-4'>
                  Our pricing plans are flexible and affordable, making it easy
                  to use our tool without breaking the bank.
                </p>
                <img
                  src='https://source.unsplash.com/featured/?affordable'
                  alt='Affordable'
                  className='mx-auto h-20'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='custom-section py-20 bg-slate-700'>
          <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-4 text-white'>
              Features of CreateA.Img
            </h2>
            <p className='text-lg text-white text-center mb-8'>
              CreateA.Img comes with a range of features that can help you
              create stunning images.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-slate-800 p-8 rounded shadow-md'>
                <h3 className='text-white text-center mb-4'>Image Filters</h3>
                <p className='text-lg text-white text-center mb-4'>
                  CreateA.Img comes with a range of image filters that can help
                  you enhance your photos and create stunning effects.
                </p>
                <img
                  src='https://source.unsplash.com/featured/?filters'
                  alt='Filters'
                  className='mx-auto h-20'
                />
              </div>
              <div className='bg-slate-800 p-8 rounded shadow-md'>
                <h3 className='text-white text-center mb-4'>
                  Image Manipulation
                </h3>
                <p className='text-lg text-white text-center mb-4'>
                  CreateA.Img allows you to manipulate your images in a variety
                  of ways, including cropping, resizing, and more.
                </p>
                <img
                  src='https://source.unsplash.com/featured/?manipulation'
                  alt='Manipulation'
                  className='mx-auto h-20'
                />
              </div>
              <div className='bg-slate-800 p-8 rounded shadow-md'>
                <h3 className='text-white text-center mb-4'>
                  Image Generation
                </h3>
                <p className='text-lg text-white text-center mb-4'>
                  CreateA.Img uses AI algorithms to generate high-quality images
                  based on your inputs and preferences.
                </p>
                <img
                  src='https://source.unsplash.com/featured/?generation'
                  alt='Generation'
                  className='mx-auto h-20'
                />
              </div>
              <div className='bg-slate-800 p-8 rounded shadow-md'>
                <h3 className='text-white text-center mb-4'>Customization</h3>
                <p className='text-lg text-white text-center mb-4'>
                  CreateA.Img allows you to customize your images by adjusting
                  various settings and parameters.
                </p>
                <img
                  src='https://source.unsplash.com/featured/?customization'
                  alt='Customization'
                  className='mx-auto h-20'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='custom-section py-20 bg-slate-800'>
          <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-4 text-white'>
              Get Started with CreateA.Img Today
            </h2>
            <p className='text-lg text-white text-center mb-8'>
              Join thousands of users who are already creating stunning images
              with CreateA.Img. Sign up now to start generating
              professional-quality photos and marketing materials.
            </p>
            <div className='flex justify-center'>
              <button className='gradient-button px-8 py-2 rounded'>
                Sign Up
              </button>
            </div>
          </div>
        </section>
        <footer className='bg-slate-900 text-white py-8'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center'>
              <div>
                <h2 className='text-xl font-bold mb-4'>CreateA.Img</h2>
                <p className='text-sm' style={{ wordWrap: "break-word" }}>
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
                &copy; {new Date().getFullYear()} CreateA.Img. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
