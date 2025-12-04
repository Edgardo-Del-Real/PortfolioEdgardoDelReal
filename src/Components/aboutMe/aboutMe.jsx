import React from 'react';
import './aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import foto2 from '../../assets/foto2.jpg';
import { Element } from 'react-scroll';

const AboutMe = () => {
    const infoCards = [
        { icon: 'bi bi-code-slash', title: 'Stack', text: 'Fullstack Developer' },
        { icon: 'bi bi-lightbulb', title: 'Mentalidad', text: 'Autodidacta y curioso' },
        { icon: 'bi bi-people', title: 'Trabajo en equipo', text: 'Buena comunicación' },
        { icon: 'bi bi-globe', title: 'Inglés', text: 'Nivel B1 (intermedio)' },
        { icon: 'bi bi-lightning', title: 'Actitud', text: 'Proactivo y adaptable' },
        { icon: 'bi bi-bar-chart-line', title: 'Soft Skills', text: 'Constancia y resiliencia' },
        { icon: 'bi bi-rocket', title: 'Motivación', text: 'Busco crecer en el mundo IT' },
    ];

    return (
        <Element name='about-me' className='aboutme'>
            <section className='textos p-5 d-flex flex-column align-items-center' id='about-me'>
                    <div className="titulo-con-icono">  
                        <h6 className='text-secondary fw-bold'>ABOUT ME</h6>
                    </div>

                <div className='d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-start gap-5 '>
                    {/* Imagen a la izquierda */}
                    <div>
                        <img src={foto2} alt="Foto" className='img2_ img2' />
                    </div>

                    {/* Tarjetas a la derecha */}
                    <div className='tarjetas-container d-flex flex-wrap justify-content-center gap-4'>
                        {infoCards.map((card, index) => (
                            <div
                                key={index}
                                className='card text-center p-3 border-0 shadow-sm custom-card'
                            >
                                <i className={`${card.icon} fs-4 mb-2`}></i>
                                <h6 className='fw-bold mb-1'>{card.title}</h6>
                                <p className='mb-0 small'>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default AboutMe;
