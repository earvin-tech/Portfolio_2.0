import React from 'react';

import About from './components/About';
import Background from './components/Background';
import Contact from './components/ContactSection';
import Header from './components/Header';
import { HomeTitles } from './components/HomeTitle';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <>
    <Header />
    <Background>
      <HomeTitles />
      <Skills />
    </Background>
    <Projects />
    <About />
    <Contact />
    <ContactForm />
    </>
  );
}