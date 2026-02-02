import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/hero/Hero'
import AboutMe from './Components/aboutMe/aboutMe'
import Skills from './Components/skills/skills'
import Form from './Components/form/form'
import Projects from './Components/projects/projects'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar  />
    <Hero />
    <AboutMe />
    <Projects /> 
    <Skills />
    <Form />
  </React.StrictMode>,
)
