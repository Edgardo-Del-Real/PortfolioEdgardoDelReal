import React from 'react'
import './skills.css'
import css3 from '../../assets/css3.svg'
import html from '../../assets/html.svg'
import js from '../../assets/js.svg'
import boot from '../../assets/boot.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node.svg'
import mongo from '../../assets/mongo.svg'
import mysql from '../../assets/mysql.svg'
import maria from '../../assets/maria.svg'




const navBar = () =>{
    return(
      <>
      <section className='section-skills 
      d-flex 
      align-items-center 
      justify-content-center 
      flex-wrap '>

        <h2 className='titulo-skills fs-1'>SKILLS</h2>
        <section className='  d-flex 
        justify-content-evenly 
        align-items-center'>

            <section className='d-flex 
            flex-wrap 
            align-items-center 
            justify-content-around 
            carta 
            p-3 
            borde-cont-img'>

                <h2 className='fs-3 
                front 
                mb-5'>Front-end</h2>

                <div className='d-flex 
                  flex-wrap 
                  justify-content-around 
                  cont-img '>
                  <img src={html} alt="" className='img-skills'/>
                  <img src={css3} alt="" className='img-skills'/>
                  <img src={js} alt="" className='img-skills'/>
                  <img src={boot} alt="" className='img-skills'/>
                  <img src={react} alt="" className='img-skills'/>
                </div>
            </section>

            <section className='d-flex 
            flex-wrap 
            align-items-center 
            justify-content-around 
            carta 
            p-3 
            borde-cont-img '>
                <h2 className='fs-3 
                front 
                mb-5'>
                Back-end</h2>
                <div className='d-flex 
                flex-wrap 
                justify-content-around 
                cont-img'>
                  <img src={js} alt="" className='img-skills'/>
                  <img src={node} alt="" className='img-skills'/>
                  <img src={maria} alt="" className='img-skills'/>
                  <img src={mysql} alt="" className='img-skills'/>
                  <img src={mongo} alt="" className='img-skills'/>
                </div>
            </section>
        </section>
      </section>
      </>
    ) 
}

export default navBar;