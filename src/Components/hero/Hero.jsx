import React from 'react';
import './Hero.css';
import fotoMia from '../../assets/fotoMia.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
    return (
        <section className="d-flex flex-column align-items-center hero position-relative">
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
            <img src={fotoMia} alt="Edgardo Del Real" className="img-fluid imagen rounded-circle border border-light border-3 shadow-lg" />
            <section className='d-flex ps-2 mt-3'>
                <a href=""><i className='bi bi-instagram fs-3 ps-4'></i></a>
                <a href=""><i className='bi bi-linkedin fs-3 ps-4'></i></a>
                <a href=""><i className='bi bi-github fs-3 ps-4'></i></a>
            </section>
        </section>
    );
}

export default Hero;
