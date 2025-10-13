import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Contact />
    </div>
  )
}

export default App