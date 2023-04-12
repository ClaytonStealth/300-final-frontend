import { createContext, useContext, useState } from "react";
import { LoginContext, LoginProvider } from "./context/LoginContext";

import LandingPage from "./components/Landing";
import NavBar from "./components/Navbar/NavBarAI";
import ImageGeneratorPage from "./components/ImageGenerator/ImageGeneratorPage";
import MainContent from "./components/MainContent/MainContent";
import SideMenu from "./components/MainContent/SideMenu";

function App() {
  return (
    <div className='min-h-screen'>
      <LoginProvider>
        <NavBar />
      </LoginProvider>
      {/* <LandingPage /> */}
      <MainContent />
      <SideMenu />
    </div>
  );
}

export default App;
