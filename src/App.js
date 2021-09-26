import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/About';

function App() {
  return (
    <>
      <Particles 
        params={{
            particles: {
                number: {
                    value: 60,
                    density: {
                      enable: true,
                      value_area: 1200
                    }
                },
                shape: {
                    type: "circle",
                    stroke: {
                      width: 6,
                      color: "#f9ab00"
                    }
                }
            }
        }}
      />
      <Navbar />
      <Header />
      <About />
    </>
  );
}

export default App;
