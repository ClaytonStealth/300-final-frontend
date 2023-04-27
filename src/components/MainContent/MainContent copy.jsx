import React, { useState, useEffect } from "react";
import axios from "axios";
import RightSide from "./RightSide";
import ResizableSideMenu from "./ResizableSideMenu";
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
    <div className='w-full h-screen bg-slate-700 pt-16 relative flex'>
      {/* <ResizableSideMenu /> */}
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
          className='absolute z-30 top-0 left-0 w-full h-full object-cover'
        />
      )}
      
        {/* <RightSide images={images} setSelectedImages={setSelectedImages} /> */}
      
    </div>
  );
};

export default MainContent;
