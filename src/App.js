import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import ParticleBackground from './components/ui/ParticleBackground';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import CV from './components/sections/CV';
import Navigation from './components/ui/Navigation';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollIndicator from './components/ui/ScrollIndicator';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle section visibility
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Particle Background */}
          <ParticleBackground />
          
          {/* Scroll Progress Indicator */}
          <ScrollIndicator />
          
          {/* Navigation */}
          <Navigation activeSection={activeSection} />
          
          {/* Main Content */}
          <main>
            <Header />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <CV />
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

