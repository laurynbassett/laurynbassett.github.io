import React from 'react'
import { About, Contact, Portfolio, Skills, Welcome } from '.'

const Home = () => {
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
