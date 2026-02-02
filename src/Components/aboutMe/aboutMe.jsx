import React from 'react';
import './aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import foto2 from '../../assets/foto2.jpg';
import { Element } from 'react-scroll';

const AboutMe = () => {
    const infoCards = [
        { icon: 'bi bi-code-slash', title: 'Stack', text: 'Fullstack Developer' },
        { icon: 'bi bi-lightbulb', title: 'Mentalidad', text: 'Autodidacta y disciplinado' },
        { icon: 'bi bi-people', title: 'Trabajo en equipo', text: 'Buena comunicación' },
        { icon: 'bi bi-globe', title: 'Inglés', text: 'Nivel B1 (intermedio)' },
        { icon: 'bi bi-lightning', title: 'Actitud', text: 'Proactivo y adaptable' },
        { icon: 'bi bi-bar-chart-line', title: 'Soft Skills', text: 'Constancia' },
        { icon: 'bi bi-rocket', title: 'Motivación', text: 'Crecimiento IT' },
    ];

    return (
        <Element name='about-me' className='about-section d-flex align-items-center'>
            <div className="container">
                {/* Título centrado */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h6 className='text-secondary fw-bold tracking-widest'>SOBRE MI</h6>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 d-none d-lg-block text-center mb-4 mb-lg-0">
                        <div className="image-wrapper">
                            <img src={foto2} alt="Setup" className='img-fluid rounded-4 shadow-lg about-img' />
                        </div>
                    </div>

                    {/* Columna TARJETAS:
                       - Ocupa todo el ancho en móvil (col-12)
                       - Ocupa 7 columnas en PC (col-lg-7)
                    */}
                    <div className="col-12 col-lg-7">
                        <div className="row g-3 justify-content-center">
                            {infoCards.map((card, index) => (
                                /* Configuración de columnas para las tarjetas:
                                   - col-6: 2 tarjetas por fila en Móvil
                                   - col-md-4: 3 tarjetas por fila en Tablet
                                */
                                <div key={index} className='col-6 col-md-4'>
                                    <div className='card custom-card h-100 text-center p-3 border-0'>
                                        <i className={`${card.icon} fs-3 mb-2 card-icon`}></i>
                                        <h6 className='fw-bold text-white mb-1'>{card.title}</h6>
                                        <p className='small text-secondary mb-0'>{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default AboutMe;