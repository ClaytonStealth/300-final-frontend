import React, { useRef, useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RightSide = () => {
  const resizerRef = useRef();
  const sidebarRef = useRef();
  const [showPrompt, setShowPrompt] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    const initResizerFn = (resizer, sidebar) => {
      let x, w;

      const rs_mousedownHandler = (e) => {
        x = e.clientX;
        w = sidebar.clientWidth;

        document.addEventListener("mousemove", rs_mousemoveHandler);
        document.addEventListener("mouseup", rs_mouseupHandler);
      };

      const rs_mousemoveHandler = (e) => {
        const dx = e.clientX - x;
        const cw = w - dx;

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

      const rs_mouseupHandler = () => {
        document.removeEventListener("mouseup", rs_mouseupHandler);
        document.removeEventListener("mousemove", rs_mousemoveHandler);
      };

      resizer.addEventListener("mousedown", rs_mousedownHandler);
    };

    initResizerFn(resizer, sidebar);
  }, []);

  const handleArrowClick = () => {
    const sidebar = sidebarRef.current;
    sidebar.style.width = "200px";
    sidebar.style.display = "block";
    setShowArrow(false);
  };

  return (
    <div className='w-full h-full flex'>
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
          <div className='mb-4'>
            <label className='block mb-2'>Select a model</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Select model</option>
              <option>Model 1</option>
              <option>Model 2</option>
              <option>Model 3</option>
              <option>Model 4</option>
            </select>
          </div>
          {/* Other dropdowns */}
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
            <label className='block mb-2'>Eyes</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Select eyes</option>
              <option>Eyes 1</option>
              <option>Eyes 2</option>
              <option>Eyes 3</option>
              <option>Eyes 4</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Face</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Select face</option>
              <option>Face 1</option>
              <option>Face 2</option>
              <option>Face 3</option>
              <option>Face 4</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Clothing</label>
            <select className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'>
              <option>Select clothing</option>
              <option>Clothing 1</option>
              <option>Clothing 2</option>
              <option>Clothing 3</option>
              <option>Clothing 4</option>
            </select>
          </div>
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
