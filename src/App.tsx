import { Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import BackgroundScene from './components/BackgroundScene';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent-color)',
          transformOrigin: '0%',
          zIndex: 9999,
          scaleX
        }}
      />
      <CustomCursor />
      <Suspense fallback={null}>
        <BackgroundScene />
      </Suspense>
      <Navbar />
      
      <main className="content-container">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Chatbot />
    </>
  );
}

export default App;
