import './App.css'
import React from 'react'
import { Navbar, HeroSection, AboutSection, ServicesSection, ProjectsSection, TestimonialsSection, ContactSection, Footer } from './components';

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
