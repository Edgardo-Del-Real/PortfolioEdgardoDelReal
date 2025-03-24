import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Components/NavBar/navBar'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
)
