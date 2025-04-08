import React from 'react';
import './aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import foto2 from '../../assets/foto2.jpg';

const aboutMe = () => {
    return (

        <>     
        <section className='aboutme d-flex align-items-center justify-content-around'>  
            <img src={foto2} alt="" className='img2' />
        </section>
            
        </>
    );
}

export default aboutMe;
