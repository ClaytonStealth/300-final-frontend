import React, { useState } from "react";
import ImageGeneratorMenu from "./ImageGeneratorMenu";
import "./ImageGeneratorPage.css";
const ImageGeneratorPage = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div className='image-generator-page'>
      <div className='h-screen w-full bg-gray-200'>
        {/* Add your main content (e.g., generated images) here */}
        <div className='p-10'>
          <h2 className='text-2xl mb-4'>Generated Images</h2>
          {/* You can display the generated images in a grid or any other layout you prefer */}
        </div>
      </div>

      <div
        className={`image-generator-menu ${
          showMenu ? "show-menu" : "hide-menu"
        }`}
      >
        <ImageGeneratorMenu />
        <button
          className='image-generator-menu-button'
          onClick={handleMenuToggle}
          aria-label='Toggle Image Generator Menu'
        >
          {showMenu ? "Hide Menu" : "Show Menu"}
        </button>
      </div>
    </div>
  );
};

export default ImageGeneratorPage;
