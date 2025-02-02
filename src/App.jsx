import { Toaster } from 'react-hot-toast';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';


function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Toaster reverseOrder={false}/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
