import React from 'react';
import './form.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Form = () => {
    return (
            <>
            <form className='d-flex justify-content-center align-items-center flex-wrap  p-4'>
            <h2 className='titulo-skills fs-1 mb-4'>KEEP IN TOUCH</h2>
            <section className='d-flex container justify-content-evenly align-items-center p-3'>
                    <section className='d-flex flex-column content-input justify-content-center align-items-center'>
                        <input type="text" name="nombre" id="" placeholder='YOUR FULL NAME' className='' required/>
                        <input type="email" name='email' id='' placeholder='YOUR EMAIL' className='' required/>
                        <textarea name="text" id="" placeholder='YOUR MESSAGE' className='' required></textarea>
                        <button className='boton fs-6'>SUBMIT</button>
                    </section>
            </section>

            </form>
            
            </>
    );
}

export default Form;
