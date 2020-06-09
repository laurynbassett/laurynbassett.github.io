import React from 'react'
import ReactGA from 'react-ga'

// import logo from './logo.svg'
import './App.css'
import { Navbar, ScrollHandler } from './components'
import Routes from './routes'
import secrets from './secrets'

function initializeReactGA() {
  ReactGA.initialize(secrets.GOOGLE_ANALYTICS_TRACKING_ID)
  ReactGA.pageview('/homepage')
}

function App() {
  return (
    <div className='App'>
      <ScrollHandler />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
