import React from 'react';
import './aboutMe.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import foto2 from '../../assets/foto2.jpg';

const aboutMe = () => {
    return (

        <>     
        <section className='textos p-5 aboutme d-flex align-items-center justify-content-around'>  
            <section className=' d-flex align-items-center justify-content-around'>
            <img src={foto2} alt="" className='img2' />
            </section>
            <section className=' d-flex flex-wrap align-items-center justify-content-around texto'>
                <div className=''>
                    <h2 className='fs-1 titulos mb-4'>About Me</h2>
                    <p className='fs-5 parrafos'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, animi? Praesentium iusto placeat error odit obcaecati tempore totam, suscipit illo earum unde itaque cumque hic, corporis quas quidem ea fuga.</p>
                </div>
                <div className=''>
                    <h2 className='fs-1 titulos mb-4'>Why me</h2>
                    <p className='fs-5 parrafos'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto consequuntur modi iste. Laboriosam vel nesciunt corrupti earum amet dolores veniam voluptate similique placeat iste, labore quae quisquam quas ducimus animi!</p>
                </div>
            </section>
        </section>
            
        </>
    );
}

export default aboutMe;
