import './App.css';
import Home from "./components/Home";
import Edu from './components/Edu';
import About from './components/About';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Others from './components/Others';
import Contact from './components/Contact';
import './index.css';
function App() {
  return (
    <>
      <div className=' flex'>
        <div className=' scroll-hidden 2xl:basis-11/12 basis-10/12 overflow-y-auto'>
          <Home/>
          <About/>
          <Resume/>
          <Edu/>
          <Projects/>
          <Internships/>
          <Others/>
          <Contact/>
        </div>
        <div className=' navbar 2xl:basis-1/12 basis-2/12 overflow-y-hidden'>
          <Navbar/>
        </div>
      </div>
    </>

  );
}

export default App;
