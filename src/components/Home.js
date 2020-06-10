import React, { useEffect } from 'react'
import { About, Contact, initGA, PageView, Portfolio, Skills, Welcome } from '.'

const Home = () => {
  useEffect(() => {
    // Set Google Analytics on page
    initGA()
    PageView()
  })

  return (
    <div id='home'>
      <Welcome />
      <div id='#about'>
        <About />
      </div>
      <div id='#skills'>
        <Skills />
      </div>
      <div id='#portfolio'>
        <Portfolio />
      </div>
      <div id='#contact'>
        <Contact />
      </div>
    </div>
  )
}

export default Home
