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
import tailwind from '../../assets/tailwind.svg';
import csharp from '../../assets/csharp.svg';
import NET from '../../assets/net.svg';
import angular from '../../assets/angular.svg';

const Skills = () => {
    const skills = [
        { img: html, name: 'HTML5' },
        { img: css, name: 'CSS3' },
        { img: js, name: 'JavaScript' },
        { img: boot, name: 'Bootstrap' },
        { img: tailwind, name: 'Tailwind CSS' },
        { img: node, name: 'Node.js' },
        { img: react, name: 'React' },
        { img: vite, name: 'Vite' },
        { img: NET, name: '.NET' },
        { img: angular, name: 'Angular' },
        { img: csharp, name: 'C#' },
        { img: mysql, name: 'MySQL' },
        { img: mongo, name: 'MongoDB' },
        { img: maria, name: 'MariaDB' },
    ];

    return (
        <section className="skills-section d-flex align-items-center" id="skills">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h6 className='text-secondary fw-bold tracking-widest'>TECNOLOGÍAS</h6>
                        <h2 className='text-white fw-bold display-5'>Mi stack</h2>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {skills.map((skill, index) => (
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