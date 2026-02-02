import React from 'react';
import './skills.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import html from '../../assets/html.svg';
import css from '../../assets/css3.svg';
import js from '../../assets/js.svg';
import react from '../../assets/react.svg';
import vite from '../../assets/vite.svg';
import node from '../../assets/node.svg';
import mongo from '../../assets/mongo.svg';
import mysql from '../../assets/mysql.svg';
import maria from '../../assets/maria.svg';
import boot from '../../assets/boot.svg';

const Skills = () => {
    const skills = [
        { img: html, name: 'HTML5' },
        { img: css, name: 'CSS3' },
        { img: js, name: 'JavaScript' },
        { img: react, name: 'React' },
        { img: vite, name: 'Vite' },
        { img: node, name: 'Node.js' },
        { img: mongo, name: 'MongoDB' },
        { img: mysql, name: 'MySQL' },
        { img: maria, name: 'MariaDB' },
        { img: boot, name: 'Bootstrap' },
    ];

    return (
        <section className="skills-section d-flex align-items-center" id="skills">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h6 className='text-secondary fw-bold tracking-widest'>TECNOLOGÍAS</h6>
                        <h2 className='text-white fw-bold display-5'>Mi Stack Técnico</h2>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {skills.map((skill, index) => (
                        /* Configuración de la grilla (Responsive 10/10):
                           - col-4: 3 iconos por fila en celular (se ven bien grandes)
                           - col-sm-3: 4 iconos por fila en celulares grandes
                           - col-md-2: 6 iconos por fila en tablet/PC
                        */
                        <div key={index} className="col-4 col-sm-3 col-lg-2">
                            <div className="skill-card d-flex flex-column align-items-center justify-content-center">
                                <LazyLoadImage
                                    alt={skill.name}
                                    effect="blur"
                                    src={skill.img}
                                    className="skill-icon"
                                />
                                <span className="skill-name mt-3">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;