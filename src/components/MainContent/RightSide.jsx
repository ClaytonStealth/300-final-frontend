import React, { useRef, useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RightSide = ({ images, setSelectedImages }) => {
  // References for the resizer and sidebar elements
  const resizerRef = useRef();
  const sidebarRef = useRef();

  // State for managing the visibility of the prompt textarea and arrow button
  const [showPrompt, setShowPrompt] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  // Initialize the resizing functionality when the component mounts
  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    // Function to handle resizing logic
    const initResizerFn = (resizer, sidebar) => {
      let x, w;

      // Event handler for starting to resize the sidebar
      const rs_mousedownHandler = (e) => {
        x = e.clientX;
        w = sidebar.clientWidth;

        document.addEventListener("mousemove", rs_mousemoveHandler);
        document.addEventListener("mouseup", rs_mouseupHandler);
      };

      // Event handler for resizing the sidebar while dragging
      const rs_mousemoveHandler = (e) => {
        const dx = e.clientX - x;
        const cw = w - dx;

        // Control the width and visibility of the sidebar based on current width (cw)
        if (cw < 700) {
          sidebar.style.width = `${cw}px`;
        }

        if (cw <= 200) {
          sidebar.style.display = "none";
          setShowArrow(true);
        } else {
          sidebar.style.display = "block";
          setShowArrow(false);
        }
      };

      // Event handler for stopping the resizing of the sidebar
      const rs_mouseupHandler = () => {
        document.removeEventListener("mouseup", rs_mouseupHandler);
        document.removeEventListener("mousemove", rs_mousemoveHandler);
      };

      // Add the mousedown event listener to the resizer
      resizer.addEventListener("mousedown", rs_mousedownHandler);
    };

    initResizerFn(resizer, sidebar);
  }, []);

  // Handle the click event for the arrow button, which restores the sidebar
  const handleArrowClick = () => {
    const sidebar = sidebarRef.current;
    sidebar.style.width = "200px";
    sidebar.style.display = "block";
    setShowArrow(false);
  };

  return (
    <div className='w-full h-full flex z-[1000]'>
      {showArrow && (
        <button
          className='absolute right-0 bg-gray-200 p-2'
          onClick={handleArrowClick}
        >
          <AiOutlineArrowLeft />
        </button>
      )}
      <div
        className='ml-auto h-full overflow-x-hidden relative bg-gray-900 text-white'
        ref={sidebarRef}
      >
        <div
          className='w-0.5 top-0 left-0 h-full absolute cursor-col-resize bg-green-500'
          ref={resizerRef}
        ></div>
        <div className='p-4'>
          <h3 className='text-white mb-4'>Customize Model</h3>
          {Object.keys(images).map((type) => {
            return (
              <div key={type} className='mb-4'>
                <label className='block mb-2'>
                  {type}
                </label>
                <select
                  className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'
                  onChange={(e) =>
                    setSelectedImages({ ...images, [type]: e.target.value })
                  }
                >
                  <option>Select {type}</option>
                  {images[type].map((image) => {
                    return (
                      <option key={image} value={image}>
                        {image}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          })}
          {/* <div className='mb-4'>
            <label className='block mb-2'>Select a model</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Select model</option>
              <option>Model 1</option>
              <option>Model 2</option>
              <option>Model 3</option>
              <option>Model 4</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Background</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Select background</option>
              <option>Background 1</option>
              <option>Background 2</option>
              <option>Background 3</option>
              <option>Background 4</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Helm</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Helm</option>
              <option>Helm 1</option>
              <option>Helm 2</option>
              <option>Helm 3</option>
              <option>Helm 4</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Face</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Select Weap</option>
              <option>Weap 1</option>
              <option>Weap 2</option>
              <option>Weap 3</option>
              <option>Weap 4</option>
            </select>
          </div> */}
          <div className='mb-4'>
            <label
              className='block mb-2 cursor-pointer'
              onClick={() => setShowPrompt(!showPrompt)}
            >
              Prompt
            </label>
            {showPrompt && (
              <textarea
                className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'
                rows='4'
                placeholder='Enter text prompt'
              ></textarea>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
