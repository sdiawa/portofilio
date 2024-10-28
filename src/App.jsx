
import './App.css';
import Dsk from './sections/Dsk/Dsk';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return ( <> 
        <Dsk/>
         <Projects />
         <Skills />
         <Contact/>
         <Footer/>
    </>
  );
}

export default App;
