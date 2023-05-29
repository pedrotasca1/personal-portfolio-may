import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HowlingMoon from './components/HowlingMoon/HowlingMoon';
import About from './components/About/About';
import UIExperiment from './components/UI/UXExperiment/UIExperiment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowlingMoon />
      <UIExperiment />
      <About />
    </div>
  );


}

export default App;
