import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Schedule/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
