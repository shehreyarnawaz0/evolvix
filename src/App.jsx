import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechSlider from './components/TechSlider'
import Team from './components/Team'
import Why from './components/Why'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <TechSlider />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

