import React from 'react';
import './skills.css';
import css3 from '../../assets/css3.svg';
import html from '../../assets/html.svg';
import js from '../../assets/js.svg';
import boot from '../../assets/boot.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import mongo from '../../assets/mongo.svg';
import mysql from '../../assets/mysql.svg';
import maria from '../../assets/maria.svg';

const skillsData = {
  frontend: [
    { src: html, name: 'HTML' },
    { src: css3, name: 'CSS3' },
    { src: js, name: 'JavaScript' },
    { src: boot, name: 'Bootstrap' },
    { src: react, name: 'React' }
  ],
  backend: [
    { src: js, name: 'JavaScript' },
    { src: node, name: 'Node.js' },
    { src: maria, name: 'MariaDB' },
    { src: mysql, name: 'MySQL' },
    { src: mongo, name: 'MongoDB' }
  ]
};

const Skills = () => {
  return (
    <section className='section-skills d-flex flex-column align-items-center mt-5'>
      <h6 className='text-secondary fw-bold mb-4 titulo-con-icono'>SKILLS</h6>
      <div className='d-flex flex-wrap justify-content-center gap-4'>

        {/* Frontend */}
        <div className='carta p-3 borde-cont-img d-flex flex-column align-items-center'>
          <h2 className='text-primary fw-bold mb-4'>Front-end</h2>
          <div className='d-flex flex-wrap justify-content-center gap-3'>
            {skillsData.frontend.map((skill, index) => (
              <div key={index} className='skill-card text-center'>
                <img src={skill.src} alt={skill.name} className='img-skills mb-2' />
                <p className='small fw-bold'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className='carta p-3 borde-cont-img d-flex flex-column align-items-center'>
          <h2 className='text-primary fw-bold mb-4'>Back-end</h2>
          <div className='d-flex flex-wrap justify-content-center gap-3'>
            {skillsData.backend.map((skill, index) => (
              <div key={index} className='skill-card text-center'>
                <img src={skill.src} alt={skill.name} className='img-skills mb-2' />
                <p className='small fw-bold'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
