import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Education from './components/Education';
import UserInteraction from './components/UserInteraction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bgVideo from './assets/background-video.mp4';
import './App.css';

function App() {
  return (
    <div className="App relative z-0">
      <video
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
      <source src={bgVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Schedule/>
      <Education/>
      <UserInteraction/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;