import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import dotenv from 'dotenv'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

dotenv.config()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
