import React, { useState, useEffect } from "react";
import Split from "react-split";
import "./split.css";
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

const MainContent = () => {
  const [showPrompt, setShowPrompt] = useState(false);

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

  return (
    <Split
      className='pt-16 h-screen w-full flex flex-row'
      sizes={[80, 20]}
      minSize={100}
      expandToMin={false}
      gutterSize={4}
      gutterAlign='center'
      snapOffset={30}
      dragInterval={1}
      direction='horizontal'
      cursor='col-resize'
    >
      <div>
        <div className='w-full h-screen bg-slate-700 pt-16 relative'>
          {selectedImages.background && (
            <img
              src={selectedImages.background}
              alt={selectedImages.background}
              className='absolute z-0 top-0 left-0 w-full h-full object-cover'
            />
          )}
          {selectedImages.weap && (
            <img
              src={selectedImages.weap}
              alt={selectedImages.weap}
              className='absolute z-10 top-0 left-0 w-full h-full object-cover'
            />
          )}
          {selectedImages.model && (
            <img
              src={selectedImages.model}
              alt={selectedImages.model}
              className='absolute z-20 top-0 left-0 w-full h-full object-cover'
            />
          )}
          {selectedImages.helm && (
            <img
              src={selectedImages.helm}
              alt={selectedImages.helm}
              className='absolute z-20 top-0 left-0 w-full h-full object-cover'
            />
          )}
        </div>
      </div>
      <div>
        <div className='ml-auto h-full overflow-x-hidden bg-gray-900 text-white'>
          <div className='p-4'>
            <h3 className='text-white mb-4'>Customize Model</h3>
            {Object.keys(images).map((type) => {
              return (
                <div key={type} className='mb-4'>
                  <label className='block mb-2'>{type}</label>
                  <select
                    className='bg-gray-700 text-white rounded p-2 focus:outline-none w-full'
                    onChange={(e) =>
                      setSelectedImages({ ...selectedImages, [type]: e.target.value })
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
            <button className='gradient-button px-4 py-2 rounded'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </Split>
  );
};

export default MainContent;
