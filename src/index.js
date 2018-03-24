import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './scss/main.scss'
import App from './app/App'

render(<HashRouter>
  <App />
</HashRouter>, document.getElementById('app'))
