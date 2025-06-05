import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import './form.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // <- esto es crucial

        const serviceID = 'service_i7ksekm';
        const templateID = 'template_dfmr0i9';
        const publicKey = 'wlTpjz8T0lkaocfvv'; 

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Mensaje enviado correctamente 🎉");
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert("Error al enviar el mensaje 😞");
            });
    };

    return (
        <form onSubmit={handleSubmit} className='d-flex 
        justify-content-center 
        align-items-center 
        flex-wrap p-4'>
            
            <h2 className='titulo-skills 
            fs-1
            mb-4'>
            KEEP IN TOUCH
            </h2>

            <section className=' row d-flex 
            container 
            justify-content-evenly 
            align-items-center 
            p-3'>
                <section className=' col-12 sm-6 d-flex 
                flex-column 
                content-input 
                justify-content-center 
                align-items-center'>
                    <input 
                        type="text"  
                        value={name} 
                        placeholder='YOUR FULL NAME' 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                    <input 
                        type="email"  
                        placeholder='YOUR EMAIL' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea   
                        placeholder='YOUR MESSAGE' 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        required
                    />
                    <button 
                        type='submit' 
                        className='boton fs-6 '>
                        SUBMIT
                    </button>
                </section>
            </section>
        </form>
    );
};

export default Form;
