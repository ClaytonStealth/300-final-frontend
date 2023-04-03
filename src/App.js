import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import LandingPage from "./components/Landing";
import NavBar from "./components/NavBar";
import NavBarAI from "./components/NavBarAI";

function App() {
  return (
    <div className='App'>
      <NavBarAI />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
