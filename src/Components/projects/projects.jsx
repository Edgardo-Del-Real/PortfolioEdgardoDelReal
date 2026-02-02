/* src/Components/projects/projects.jsx */
import React from 'react';
import './projects.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import tr from '../../assets/TR.png';
import pelican from '../../assets/pelican.png';
import gintoneria from '../../assets/gintoneria.png';

const Projects = () => {
    // Array de datos: Agrega aquí tus proyectos reales
    const projectList = [
        {
            title: "TR EXPRESS DISTRIBUIDORA ",
            description: "Landing page moderna y responsive para una empresa de venta de comida para mascotas.",
            techs: ["HTML5", "CSS3", "JavaScript", "Vercel", "Tailwind CSS"],
            img: tr, 
            demoLink: "https://trexpressdistribuidora.com/",
            repoLink: "#"
        },
        {
            title: "Pelican Bar",
            description: "Menu digital autogestionable para bares con código QR y diseño responsive.",
            techs: ["JavaScript", "Google sheets", "Tailwind CSS", "Vercel"],
            img: pelican,
            demoLink: "https://pelican-menu-digital.vercel.app/",
            repoLink: "https://github.com/Edgardo-Del-Real/pelican-menu-digital"
        },
        {
            title: "La Gintoneria Bar",
            description: "Menu digital autogestionable para bares con código QR y diseño responsive.",
            techs: ["JavaScript", "Google sheets", "Tailwind CSS", "Vercel"],
            img: gintoneria,
            demoLink: "https://menu-la-gintoneria.vercel.app/",
            repoLink: "https://github.com/Edgardo-Del-Real/LaGintoneriaMenu"
        }
    ];

    return (
        <section className="projects-section d-flex align-items-center" id="projects">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h6 className='text-secondary fw-bold tracking-widest'>PORTAFOLIO</h6>
                        <h2 className='text-white fw-bold display-5'>Mis Proyectos</h2>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {projectList.map((project, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="project-card">
                                <div className="project-img-wrapper">
                                    <img src={project.img} alt={project.title} className="project-img" />
                                </div>
                                <div className="card-body-custom">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    
                                    {/* Tecnologías */}
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {project.techs.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>

                                    {/* Botones */}
                                    <div className="d-flex gap-3 mt-auto">
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                            <i className="bi bi-play-circle"></i> Demo
                                        </a>
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn-repo">
                                            <i className="bi bi-github"></i> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;