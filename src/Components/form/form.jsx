import React from 'react';
import './form.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Form = () => {
    return (
            <>
            <form className='d-flex justify-content-center align-items-center flex-wrap'>
            <h2 className='titulo-skills fs-1'>KEEP IN TOUCH</h2>
            <section className='d-flex container border justify-content-evenly align-items-center p-3'>
                    <section className='d-flex flex-column icons align-items-end'>
                        <a href="https://www.instagram.com/edgardelreal1/" target='_blanc'><i className='bi bi-instagram ins ps-4'></i></a>
                        <a href="https://www.linkedin.com/in/edgardo-del-real/" target='_blanc'><i className='bi bi-linkedin linkedin ps-4'></i></a>
                        <a href="https://github.com/Edgardo-Del-Real" target='_blanc' ><i className='bi bi-github git ps-4'></i></a>
                    </section>
                    <section className='d-flex flex-column content-input justify-content-center align-items-center border'>
                        <input type="text" name="nombre" id="" placeholder='YOUR FULL NAME' required/>
                        <input type="email" name='email' id='' placeholder='YOUR EMAIL DIRECTION' required/>
                        <textarea name="text" id="" placeholder='YOUR MESSAGE' required></textarea>
                    </section>
            </section>

            </form>
            
            </>
    );
}

export default Form;
