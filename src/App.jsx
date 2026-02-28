import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Certification from './components/Certification'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Skills />
      <Certification />
      <Contact />
      <Footer />
    </div>
  )
}

export default App