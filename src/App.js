import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import LandingPage from "./components/Landing";
import NavBar from "./components/NavBarAI";
import RegistrationPage from "./components/RegistrationPage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className='bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 min-h-screen'>
      <NavBar />
      <LandingPage />
      <HeroSection />
      <RegistrationPage />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default App;
