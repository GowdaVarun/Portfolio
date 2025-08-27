import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import React from 'react'
import './App.css'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Chatbot />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
