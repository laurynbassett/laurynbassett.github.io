import React, { useEffect } from 'react'
import { About, Contact, initGA, PageView, Portfolio, Skills, Welcome } from '.'

const Home = props => {
  const { aboutScroll, aboutRef, contactRef, portfolioRef, skillsRef } = props

  useEffect(() => {
    // Set Google Analytics on page
    initGA()
    PageView()
  })

  return (
    <div id='home'>
      <Welcome aboutScroll={aboutScroll} />
      <div id='#about'>
        <About aboutRef={aboutRef} />
      </div>
      <div id='#skills'>
        <Skills skillsRef={skillsRef} />
      </div>
      <div id='#portfolio'>
        <Portfolio portfolioRef={portfolioRef} />
      </div>
      <div id='#contact'>
        <Contact contactRef={contactRef} />
      </div>
    </div>
  )
}

export default Home
