import React from 'react';
import './aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import foto2 from '../../assets/foto2.jpg';
import { Element } from 'react-scroll';

const aboutMe = () => { 

    return (

        <Element name='about-me'>    
        <section className='textos 
        p-5 
        aboutme 
        d-flex 
        align-items-center 
        justify-content-around'
        id='about-me'>  
            <section className=' d-flex 
            align-items-center 
            justify-content-around'>
            <img src={foto2} alt="" className='img2' />
            </section>
            <section className=' d-flex 
            flex-wrap 
            align-items-center 
            justify-content-around 
            texto'>
                <div>
                    <h2 className='fs-1 
                        titulos 
                        mb-4'>
                        About Me
                    </h2>
                    <p className='fs-5 
                    parrafos'>
                        Soy Fullstack Developer, con interés en seguir creciendo en el mundo IT. Me gusta explorar nuevas tecnologías y mejorar constantemente mis habilidades. Tengo nivel de inglés B1, con buena capacidad para comunicarme y aprender en ese idioma.
                    </p>
                </div>
                <div>
                    <h2 className='fs-1 
                        titulos 
                        mb-4'>
                        Why me
                    </h2>
                    <p 
                    className='fs-5 
                    parrafos'>
                        Me involucro con compromiso y curiosidad. Soy proactivo, autodidacta y veo los desafíos como oportunidades. Me adapto rápido, trabajo bien en equipo y me comunico con claridad. La constancia y la resiliencia me acompañan día a día.
                    </p>
                </div>
            </section>
        </section>
        </Element>
    );
}
export default aboutMe;
