import React, { useState } from "react";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`resize-x float-right fixed top-0 right-0 h-screen transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        } bg-gray-300 overflow-x-hidden border-l-8 border-black`}
      >
        {/* Your side menu content goes here */}
      </div>
      <button
        onClick={toggleMenu}
        className='fixed top-1/4 right-4 bg-blue-500 text-white px-2 py-1'
      >
        {isOpen ? "Close" : "Open"}
      </button>
    </>
  );
};

export default SideMenu;
