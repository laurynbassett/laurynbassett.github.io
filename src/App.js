import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Navbar, ScrollHandler } from './components'
import Routes from './routes'

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
