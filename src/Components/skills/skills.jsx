import React from 'react'
import './skills.css'
import css3 from '../../assets/css3.svg'
import html from '../../assets/html.svg'
import js from '../../assets/js.svg'
import boot from '../../assets/boot.svg'
import react from '../../assets/react.svg'


const navBar = () =>{
    return(
      <>
        <section className='section-skills d-flex justify-content-center pt-4 flex-wrap' >
            <h2 className='titulo-skills fs-2'>SKILLS</h2>
            <section className='d-flex flex-wrap justify-content-center '>
                <h2 className='fs-3 front'>Front-end</h2>
                <div className='d-flex '>
                  <img src={html} alt="" className='img-skills'/>
                  <img src={css3} alt="" className='img-skills'/>
                  <img src={js} alt="" className='img-skills'/>
                  <img src={boot} alt="" className='img-skills'/>
                  <img src={react} alt="" className='img-skills'/>
                </div>
                
            </section>
        </section>
      </>
    ) 
}

export default navBar;