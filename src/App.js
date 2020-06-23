import React, { useRef } from 'react'

// import logo from './logo.svg'
import './App.css'
import { Navbar, ScrollHandler } from './components'
import Routes from './routes'

// general scroll function for navbar links
const scrollToRef = ref => {
  console.log('REF', ref.current.className)
  console.log('OFFSER', ref.current.offsetTop)
  if (ref.current.className === 'section-about') {
    window.scrollTo(0, ref.current.offsetTop - 100)
  } else if (ref.current.className === 'section-skills') {
    window.scrollTo(0, ref.current.offsetTop - 110)
  } else if (ref.current.className === 'section-portfolio') {
    window.scrollTo(0, ref.current.offsetTop - 115)
  } else if (ref.current.className === 'section-contact') {
    window.scrollTo(0, ref.current.offsetTop - 110)
  }
}

function App(props) {
  // refs for each page section
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const portfolioRef = useRef(null)
  const skillsRef = useRef(null)

  // scroll fns for each page section
  const aboutScroll = () => scrollToRef(aboutRef)
  const contactScroll = () => scrollToRef(contactRef)
  const portfolioScroll = () => scrollToRef(portfolioRef)
  const skillsScroll = () => scrollToRef(skillsRef)

  return (
    <div className='App'>
      <ScrollHandler />
      <Navbar
        aboutScroll={aboutScroll}
        contactScroll={contactScroll}
        portfolioScroll={portfolioScroll}
        skillsScroll={skillsScroll}
      />
      <Routes
        aboutScroll={aboutScroll}
        aboutRef={aboutRef}
        contactRef={contactRef}
        portfolioRef={portfolioRef}
        skillsRef={skillsRef}
      />
    </div>
  )
}

export default App
