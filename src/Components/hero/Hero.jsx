import React from 'react';
import './Hero.css';
import fotoMia from '../../assets/fotoMia.jpg';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="hero-section d-flex align-items-center" id="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                        <h1 className="display-4 fw-bold text-white mb-2">
                            Edgardo Del Real
                        </h1>
                        <h2 className="h4 text-secondary mb-4">
                            Desarrollador Web Fullstack
                        </h2>

                        <div className="d-flex gap-4 mb-4 social-icons">
                            <a href="https://www.instagram.com/edgardelreal1/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/edgardo-del-real/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com/Edgardo-Del-Real" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>

                        <div className="d-flex gap-3">
                            <a href="https://drive.google.com/file/d/1FDVL_qXcswt7VR9sp6Bph409AHnUg3yS/view?usp=sharing" target='_blank' className="btn-cv" download>
                                Descargar CV
                            </a>
                            <Link 
                                to="contact-section"
                                smooth={true} 
                                duration={500} 
                                className="btn-contact"
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>

                    {/* Columna de IMAGEN:
                       - Móvil: order-1 (Va PRIMERO, arriba del todo)
                       - PC (md): order-md-2 (Va SEGUNDO, a la derecha)
                    */}
                    <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
                        <div className="image-container">
                            <img
                                src={fotoMia}
                                alt="Edgardo Del Real"
                                className="img-fluid hero-img"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;