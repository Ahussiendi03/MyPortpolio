import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}

export default App