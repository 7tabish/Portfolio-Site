import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Sidebar from './components/Sidebar';
import Potfolio from './components/Portfolio';




function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle =()=>{
      console.log('setting toggle', isOpen);
    setIsOpen(!isOpen); 
  }
  return (
    <div className="App">
      <div className='mainContainer'>
        <Navbar/>
        <div className='mainContentWrapper'>
          <div className='mainContent'>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Home  toggle={toggle}/>
            <About/>
            <Skills/>
            <Potfolio/>
     
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
