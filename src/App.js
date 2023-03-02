import './components/index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <InfoSection />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
