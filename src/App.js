import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import InfoSection from './components/InfoSection';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import heroImageMobile from './images/mobile/image-hero.jpg';
import heroImageDesktop from './images/desktop/image-hero.jpg';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroImage mobileImage={heroImageMobile} desktopImage={heroImageDesktop} description = "hero-image" />
      <InfoSection />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
