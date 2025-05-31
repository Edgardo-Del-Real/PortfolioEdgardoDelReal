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
                bg-opacity-50">
                 
                <li className="pt-2 px-5 ms-2"><a href="#">HOME</a></li>
                <li className="p-2 px-5 ms-2">
                  <Link to="about-me" spy={true} smooth={true} duration={500}>
                  ABOUT ME </Link> </li>
                  <li className="p-2 px-5 ms-2"><a href="#">SKILLS</a></li>
                  <li className="p-2 px-5 ms-2"><a href="#">CONTACT</a></li>
                </ul>
            </section>
        </nav>

      </>
    ) 
}

export default navBar;