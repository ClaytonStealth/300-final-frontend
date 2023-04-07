import React from "react";

function LandingPage() {
  return (
    <div className='bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 min-h-screen'>
      <section className='h-screen flex flex-col justify-center items-center'>
        <div className='container mx-auto text-white'>
          <h1 className='text-4xl font-bold text-center mb-4'>
            Create Stunning Images with CreateA.Img
          </h1>
          <p className='text-xl text-center mb-8'>
            AI-driven image generation for professional photos and marketing
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-white p-4 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>Input Image</h3>
              <img
                src='/images/input-image.jpg'
                alt='Input Image'
                className='w-full h-64 object-cover rounded'
              />
            </div>
            <div className='bg-white p-4 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>
                AI-Generated Image
              </h3>
              <img
                src='/images/ai-generated-image.jpg'
                alt='AI-Generated Image'
                className='w-full h-64 object-cover rounded'
              />
            </div>
          </div>
          <button className='bg-blue-600 px-8 py-2 rounded hover:bg-blue-700 text-white'>
            Try It Now
          </button>
        </div>
      </section>
      <section className='py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500'>
        <div className='container mx-auto text-white'>
          <h2 className='text-3xl font-bold text-center mb-4'>
            Create Stunning Images with AI
          </h2>
          <p className='text-lg text-center mb-8'>
            CreateA.Img is an AI-driven image generation tool that can help you
            create professional-quality photos and marketing materials.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white p-8 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>Fast</h3>
              <p className='text-lg text-gray-700 text-center mb-4'>
                Our AI algorithms work quickly to generate high-quality images
                in no time.
              </p>
              <img src='/images/fast.svg' alt='Fast' className='mx-auto h-20' />
            </div>
            <div className='bg-white p-8 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>Easy</h3>
              <p className='text-lg text-gray-700 text-center mb-4'>
                CreateA.Img is easy to use and requires no technical expertise.
              </p>
              <img src='/images/easy.svg' alt='Easy' className='mx-auto h-20' />
            </div>
            <div className='bg-white p-8 rounded shadow-md'>
              <h3
                className='text-blue-900
          text-center mb-4'
              >
                Affordable
              </h3>
              <p className='text-lg text-gray-700 text-center mb-4'>
                Our pricing plans are flexible and affordable, making it easy to
                use our tool without breaking the bank.
              </p>
              <img
                src='/images/affordable.svg'
                alt='Affordable'
                className='mx-auto h-20'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500'>
        <div className='container mx-auto text-white'>
          <h2 className='text-3xl font-bold text-center mb-4'>
            Features of CreateA.Img
          </h2>
          <p className='text-lg text-center mb-8'>
            CreateA.Img comes with a range of features that can help you create
            stunning images.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white p-8 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>Image Filters</h3>
              <p className='text-lg text-gray-700 text-center mb-4'>
                CreateA.Img comes with a range of image filters that can help
                you enhance your photos and create stunning effects.
              </p>
              <img
                src='/images/filters.svg'
                alt='Filters'
                className='mx-auto h-20'
              />
            </div>
            <div className='bg-white p-8 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>
                Image Manipulation
              </h3>
              <p className='text-lg text-gray-700 text-center mb-4'>
                CreateA.Img allows you to manipulate your images in a variety of
                ways, including cropping, resizing, and more.
              </p>
              <img
                src='/images/manipulation.svg'
                alt='Manipulation'
                className='mx-auto h-20'
              />
            </div>
            <div className='bg-white p-8 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>
                Image Generation
              </h3>
              <p className='text-lg text-gray-700 text-center mb-4'>
                CreateA.Img uses AI algorithms to generate high-quality images
                based on your inputs and preferences.
              </p>
              <img
                src='/images/generation.svg'
                alt='Generation'
                className='mx-auto h-20'
              />
            </div>
            <div className='bg-white p-8 rounded shadow-md'>
              <h3 className='text-blue-900 text-center mb-4'>Customization</h3>
              <p className='text-lg text-gray-700 text-center mb-4'>
                CreateA.Img allows you to customize your images by adjusting
                various settings and parameters.
              </p>
              <img
                src='/images/customization.svg'
                alt='Customization'
                className='mx-auto h-20'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500'>
        <div className='container mx-auto text-white'>
          <h2 className='text-3xl font-bold text-center mb-4'>
            Try CreateA.Img Today
          </h2>
          <p className='text-lg text-center mb-8'>
            Sign up for CreateA.Img today and start creating stunning images
            with ease.
          </p>
          <div className='flex justify-center'>
            <button className='bg-blue-600 px-8 py-2 rounded hover:bg-blue-700 text-white'>
              Sign Up Now
            </button>
          </div>
        </div>
      </section>
      <section className='py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500'>
        <div className='container mx-auto text-white'>
          <h2 className='text-3xl font-bold text-center mb-4'>Contact Us</h2>
          <p className='text-lg text-center mb-8'>
            Have a question or feedback? Get in touch with our team today.
          </p>
          <div className='flex justify-center'>
            <button className='bg-white px-8 py-2 rounded hover:bg-gray-100 text-blue-900'>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default LandingPage;
