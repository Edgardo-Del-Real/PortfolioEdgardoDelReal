import React from 'react';
import './Hero.css';
import fotoMia from '../../assets/fotoMia.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
    return (
    <section className="container position-relative hero">
  <div className="row align-items-center">
    <div className="col-md-6 d-flex flex-column align-items-start">
      <h1 className="display-4 fw-bold text-primary mb-3">
        Edgardo Del Real
      </h1>
      <h2 className="h4 text-secondary mb-4">Desarrollador Web Fullstack</h2>
      <section className="d-flex mb-4">
        <a href="https://www.instagram.com/edgardelreal1/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram ins ps-3 fs-3 "></i>
        </a>
        <a href="https://www.linkedin.com/in/edgardo-del-real/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin linkedin ps-3 fs-3 "></i>
        </a>
        <a href="https://github.com/Edgardo-Del-Real" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github git ps-3 fs-3"></i>
        </a>
      </section>

      <div className="d-flex gap-3">
        <a href="#" className="btn-cv" download>
          Descargar CV
        </a>
        <a href="#contacto" className="btn-contact">
          Contacto
        </a>
      </div>
    </div>

    <div className="col-md-6 text-center mt-4 mt-md-0">
      <img
        src={fotoMia}
        alt="Edgardo Del Real"
        className="img-fluid img2"
        style={{ maxWidth: '300px' }}
      />
    </div>
  </div>
</section>


    );
}

export default Hero;
