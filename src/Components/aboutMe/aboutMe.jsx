import React from 'react';
import './aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const aboutMe = () => {
    return (

        <>     
        <section className='aboutme  d-flex align-items-center justify-content-center p-5'>
            <section className=' borde-card card1  d-flex flex-column align-items-center justify-content-center'>
                <h2 className='titulo'>About Me</h2>
                <p className='text-light fs-5 parrafo'> 
                Soy Fullstack Developer y curso el tercer año de Ingeniería en Sistemas. Me interesa seguir desarrollándome en el mundo IT, explorando nuevas tecnologías y mejorando mis habilidades día a día. Tengo nivel de inglés B1, con buena capacidad conversacional, lo que me permite comunicarme y aprender de fuentes en ese idioma. Me gusta mantenerme en constante movimiento, tanto personal como profesionalmente.
                </p>
            </section>
            <section className='borde-card card1 d-flex flex-column align-items-center justify-content-center '>
                <h2 className='titulo'>Why me</h2>
                <p className='text-light fs-5 parrafo'>
                Porque me involucro con compromiso y curiosidad en cada proyecto. Soy proactivo, autodidacta y no le tengo miedo a los desafíos: los veo como oportunidades para crecer. Me adapto rápido a distintos contextos, disfruto trabajar en equipo y sé comunicarme con claridad. Cuando surgen problemas, sé observar con atención, entender qué está pasando y encontrar una solución práctica. La constancia y la resiliencia me acompañan en el desarrollo y en el aprendizaje diario.
                </p>
            </section> 
        </section>
            
        </>
    );
}

export default aboutMe;
