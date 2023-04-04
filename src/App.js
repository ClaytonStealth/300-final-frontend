import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import LandingPage from "./components/Landing";
import NavBar from "./components/NavBarAI";
import RegistrationPage from "./components/RegistrationPage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HeroSection />
      <RegistrationPage />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default App;
