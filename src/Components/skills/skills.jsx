import React from 'react'
import './skills.css'
import css3 from '../../assets/css3.svg'


const navBar = () =>{
    return(
      <>
        <section className='section-skills d-flex justify-content-center pt-4' >
            <h2 className='titulo-skills fs-2'>SKILLS</h2>
            <section>
                <h2>Front-end</h2>
                <div>
                  <img src={css3} alt="" />
                </div>
                
            </section>
        </section>
      </>
    ) 
}

export default navBar;