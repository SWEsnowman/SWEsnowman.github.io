import React, { useEffect } from 'react';
//import Navbar from './components/Navbar';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
//import MyCal from './components/mycal/MyCal';
import JobExperience from './components/JobExperience.jsx';
//import { logPageView } from './gtag'; // Import the GA functions
import {Card } from '@mui/material'
function App() {
  // useEffect(() => {
  //   logPageView();
  // }, []);

  return (
      <main className="text-gray-400 bg-gray-900 body-font block">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        {/* <Navbar /> */}
        <section className="py-12 px-4">
          <About />
        </section>
        <section className="py-12 px-4">
          <Projects />
        </section>
        <section className="py-12 px-4">
          <Skills />
        </section>
        <section className="py-12 px-4">
          <JobExperience />
        </section>
        <section className="py-12 px-4">
          <Contact />
        </section>
      </main>
  );
}

export default App
