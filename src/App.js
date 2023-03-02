import './App.css';
import Header from './components/Header';
import HeaderImage from './components/HeaderImage';
import InfoSection from './components/InfoSection';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderImage />
      <InfoSection />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
