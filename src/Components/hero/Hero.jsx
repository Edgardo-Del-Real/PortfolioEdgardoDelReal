import React from 'react';
import './Hero.css';
import fotoMia from '../../assets/fotoMia.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
    return (
        <section className=" d-flex 
        flex-column 
        hero align-items-center 
        position-relative">
            {/* SVG para texto curvado */}
            <svg width="300" height="100" className="position-absolute">
                <defs>
                    <path id="curvaTexto" d="M 50,100 A 100,50 0 1,1 250,100" fill="transparent" />
                </defs>
                <text fill="white" fontSize="24" fontWeight="bold">
                    <textPath href="#curvaTexto" startOffset="50%" textAnchor="middle">
                        Edgardo Del Real
                    </textPath>
                </text>
            </svg>

            {/* Imagen */}
           
            <img src={fotoMia} alt="Edgardo Del Real" className="img-fluid imagen  border-3" />
          
            <section className='d-flex  mt-4 '>
                <a href="https://www.instagram.com/edgardelreal1/" target='_blanc'><i className='bi bi-instagram ins ps-4'></i></a>
                <a href="https://www.linkedin.com/in/edgardo-del-real/" target='_blanc'><i className='bi bi-linkedin linkedin ps-4'></i></a>
                <a href="https://github.com/Edgardo-Del-Real" target='_blanc' ><i className='bi bi-github git ps-4'></i></a>
            </section>
        </section>
    );
}

export default Hero;
