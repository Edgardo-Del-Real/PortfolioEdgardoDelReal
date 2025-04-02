import React from 'react';
import './Hero.css';
import fotoMia from '../../assets/fotoMia.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Hero = () => {
    return (
        <>
            <section className='d-flex justify-content-center hero'>
                <img src={fotoMia} alt="" className='img-fluid imagen ' />                
            </section>
        </>
    );
}

export default Hero;
