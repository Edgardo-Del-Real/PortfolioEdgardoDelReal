import React from 'react';
import './Hero.css';
import fotoMia from '../../assets/fotoMia.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Hero = () => {
    return (
        <>
            <div className="container card bg-secondary " style={{ maxWidth: '540px' }}>
                <div className="row g-5">
                    <div className="col-md-4">
                        <img src={fotoMia} className="img-fluid rounded-start" alt="Edgardo Del Real" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title d-flex justify-content-center text-white">EDGARDO DEL REAL</h5>
                            <p className="card-text d-flex justify-content-center">Estudiante de Ingenieria en Sistemas</p>
                            <p className="card-text d-flex justify-content-center">FullStack Developer</p>
                            <section className='d-flex justify-content-center'>
                            <i className='bi bi-linkedin ps-3 fs-2'></i>
                            <i className='bi bi-github ps-3 fs-2'></i>
                            <i className='bi bi-instagram ps-3 fs-2'></i>
                            </section> 
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
}

export default Hero;
