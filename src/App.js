import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Particles 
        params={{
            particles: {
                number: {
                    value: 45,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                },
                shape: {
                    type: "circle",
                    stroke: {
                      width: 6,
                      color: "#f9ab00"
                    }
                },
                move: {
                  speed: 1
                }
            }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
