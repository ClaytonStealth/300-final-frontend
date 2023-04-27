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
    <div className='w-full h-screen bg-slate-700 pt-16 relative'>
      <RightSide />
    </div>
  );
};

export default MainContent;
