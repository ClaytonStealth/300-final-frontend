import React from "react";

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-blue-600 p-4 fixed w-full text-white'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div>CreateA.Img</div>
            <nav className='space-x-4'>
              <a href='#home'>Home</a>
              <a href='#about'>About</a>
              <a href='#features'>Features</a>
              <a href='#pricing'>Pricing</a>
              <a href='#contact'>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className='pt-16'>
        {/* Hero section */}
        <section className='bg-cover bg-center h-screen text-white flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>
            Generate Stunning Images with CreateA.Img
          </h1>
          <p className='text-xl mt-4 mb-8'>
            AI-driven image generation for professional photos and marketing
          </p>
          <button className='bg-blue-600 px-8 py-2 rounded hover:bg-blue-700'>
            Try It Now
          </button>
        </section>

        {/* Features section */}
        <section className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Feature 1 */}
          <div className='bg-white shadow p-4 rounded'>
            <div className='text-blue-600'>Feature 1</div>
            <p>Short description about Feature 1</p>
          </div>
          {/* Feature 2 */}
          <div className='bg-white shadow p-4 rounded'>
            <div className='text-blue-600'>Feature 2</div>
            <p>Short description about Feature 2</p>
          </div>
          {/* Feature 3 */}
          <div className='bg-white shadow p-4 rounded'>
            <div className='text-blue-600'>Feature 3</div>
            <p>Short description about Feature 3</p>
          </div>
          {/* Feature 4 */}
          <div className='bg-white shadow p-4 rounded'>
            <div className='text-blue-600'>Feature 4</div>
            <p>Short description about Feature 4</p>
          </div>
        </section>

        {/* Examples section */}
        <section className='py-12'>
          <h2 className='text-2xl font-bold mb-6'>Image Examples</h2>
          {/* Slider or carousel */}
        </section>

        {/* Pricing section */}
        <section className='py-12'>
          <h2 className='text-2xl font-bold mb-6'>Pricing Plans</h2>
          {/* Pricing cards */}
        </section>

        {/* Testimonials section */}
        <section className='py-12'>
          <h2 className='text-2xl font-bold mb-6'>Testimonials</h2>
          {/* Slider or carousel */}
        </section>
      </main>

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

export default LandingPage;
