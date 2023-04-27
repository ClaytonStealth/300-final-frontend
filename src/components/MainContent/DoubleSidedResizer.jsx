import React, { useRef, useState, useEffect } from "react";
import {
  backpack,
  BlackBG,
  Blackdragon,
  blueBG,
  bluedragon,
  goldragon,
  GreenBG,
  Katanas,
  lavadragon,
  militaryhelmet,
  Nunchucks,
  OrangeBG,
  PurpleBG,
  RedBG,
  scifihelmet,
  Skateboard,
  Skateboard2,
  Skateboard3,
  spacehelmet,
  vrhelmet,
  WhiteBG,
} from "../../assets/index";

const DoubleSidedResizer = () => {
  const helm = [vrhelmet, spacehelmet, scifihelmet, militaryhelmet];
  const weap = [
    backpack,
    Skateboard,
    Skateboard2,
    Skateboard3,
    Nunchucks,
    Katanas,
  ];
  const model = [Blackdragon, bluedragon, goldragon, lavadragon];
  const background = [
    blueBG,
    RedBG,
    BlackBG,
    GreenBG,
    OrangeBG,
    PurpleBG,
    WhiteBG,
  ];
  const [images, setImages] = useState({
    background: background,
    weap: weap,
    model: model,
    helm: helm,
  });
  const [selectedImages, setSelectedImages] = useState({
    background: null,
    weap: null,
    model: null,
    helm: null,
  });
  const resizerRef = useRef();
  const leftSideRef = useRef();
  const rightSideRef = useRef();

  const [showPrompt, setShowPrompt] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const resizer = resizerRef.current;
    const leftSide = leftSideRef.current;
    const rightSide = rightSideRef.current;

    const initResizerFn = (resizer, leftSide, rightSide) => {
      let x, y, leftWidth, rightWidth;

      const rs_mousedownHandler = (e) => {
        x = e.clientX;
        y = e.clientY;
        leftWidth = leftSide.clientWidth;
        rightWidth = rightSide.clientWidth;

        document.addEventListener("mousemove", rs_mousemoveHandler);
        document.addEventListener("mouseup", rs_mouseupHandler);
      };

      const rs_mousemoveHandler = (e) => {
        const dx = e.clientX - x;
        const dy = e.clientY - y;
        const newLeftWidth = leftWidth + dx;
        const newRightWidth = rightWidth - dx;

        if (newLeftWidth > 0 && newRightWidth > 0) {
          leftSide.style.width = `${newLeftWidth}px`;
          rightSide.style.width = `${newRightWidth}px`;
        }

        if (newRightWidth <= 200) {
          rightSide.style.display = "none";
          setShowArrow(true);
        } else {
          rightSide.style.display = "block";
          setShowArrow(false);
        }
      };

      const rs_mouseupHandler = () => {
        document.removeEventListener("mouseup", rs_mouseupHandler);
        document.removeEventListener("mousemove", rs_mousemoveHandler);
      };

      resizer.addEventListener("mousedown", rs_mousedownHandler);
    };

    initResizerFn(resizer, leftSide, rightSide);
  }, []);

  return (
    <div className='w-full h-full flex'>
      <div
        ref={leftSideRef}
        className='w-full h-full flex flex-col items-center justify-center bg-gray-200 overflow-hidden'
      >
        {/* Add your left side content (PNG images) here */}
        <img src='image1.png' alt='Ima 1' className='object-contain' />
        <img src='image2.png' alt='Ima 2' className='object-contain' />
        <img src='image3.png' alt='Ima 3' className='object-contain' />
        <img src='image4.png' alt='Ima 4' className='object-contain' />
      </div>
      <div
        ref={resizerRef}
        className='w-0.5 top-0 left-0 h-full cursor-col-resize bg-green-500'
      ></div>
      <div
        ref={rightSideRef}
        className='h-full overflow-x-hidden relative bg-gray-900 text-white'
      >
        <div className='p-4'>
          <h3 className='text-white mb-4'>Customize Model</h3>
          {Object.keys(images).map((type) => {
            return (
              <div key={type} className='mb-4'>
                <label className='block mb-2'>{type}</label>
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
        <div className='flex justify-center'>
          <button className='gradient-button px-4 py-2 rounded'>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default DoubleSidedResizer;
