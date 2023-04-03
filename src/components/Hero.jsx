import React from "react";
const HeroSection = () => {
    return (
      <section
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/featured/?abstract,pattern')",
        }}
      >
        <div className="container mx-auto text-white">
          <h1 className="text-4xl font-bold text-center mb-4">
            Create Stunning Images with CreateA.Img
          </h1>
          <p className="text-xl text-center mb-8">
            AI-driven image generation for professional photos and marketing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-blue-900 text-center mb-4">Input Image</h3>
              <img
                src="https://source.unsplash.com/featured/?nature"
                alt="Input Image"
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-blue-900 text-center mb-4">AI-Generated Image</h3>
              <img
                src="https://source.unsplash.com/featured/?art"
                alt="AI-Generated Image"
                className="w-full h-64 object-cover rounded"
              />
            </div>
          </div>
          <button className="bg-blue-600 px-8 py-2 rounded hover:bg-blue-700">
            Try It Now
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
