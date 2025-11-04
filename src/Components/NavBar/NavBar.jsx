import React from 'react'
import './NavBar.css'
import {Link} from 'react-scroll';
const navBar = () =>{
    return(
      <>
        <nav className=" container navbar p-2 mt-4 " >
          
          <section className="d-flex 
            flex-grow-1 
            justify-content-center ">
              <ul className="d-flex 
                list-unstyled 
                m-0 
                borde 
                rounded-5 
                p-2 
                bg-dark 
                bg-opacity-50
                bg-black
                responsive-nav">
                 
                <li 
                  className="pt-2 
                  px-5 
                  ms-2">
                    <Link 
                      to="hero" 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='links'>
                    HOME</Link>
                </li>
                
                <li 
                  className="pt-2 
                    px-5 
                    ms-2">
                      <Link 
                        to="about-me" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='links'>
                      ABOUT ME</Link>
                </li>
                  
                <li 
                  className="pt-2 
                    px-5 
                    ms-2">
                      <Link 
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='links'
                      >SKILLS</Link>
                </li>

                  <li 
                    className="p-2 
                      px-5 
                      ms-2">
                        <Link 
                          to="projects" 
                          spy={true} 
                          smooth={true} 
                          duration={500}  
                          className='links'>
                        PROJECTS</Link>
                  </li>
              </ul>
            </section>
        </nav>

      </>
    ) 
}

export default navBar;