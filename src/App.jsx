import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App