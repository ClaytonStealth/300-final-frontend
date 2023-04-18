import { createContext, useContext, useState } from "react";
import { LoginContext, LoginProvider } from "./context/LoginContext";

import LandingPage from "./components/Landing";
import NavBar from "./components/Navbar/NavBarAI";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className='min-h-screen'>
      <LoginProvider>
        <NavBar />
      </LoginProvider>
      <LandingPage />
      <MainContent />
    </div>
  );
}

export default App;
