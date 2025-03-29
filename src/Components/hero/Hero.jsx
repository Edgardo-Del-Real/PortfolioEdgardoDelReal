import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className="card container " style={{ maxWidth: '540px' }}>
                <div className="row g-5">
                    <div className="col-md-4">
                        <img src="ruta/a/tu/imagen.jpg" className="img-fluid rounded-start" alt="Descripción de la imagen" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">EDGARDO DEL REAL</h5>
                            <p className="card-text">Estudiante de Ingenieria en Sistemas FullStack Developer</p>
                            <button><i>Likedin</i></button>
                            <button><i>GitHub</i></button>
                            <button><i>instagram</i></button>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
}

export default Hero;
