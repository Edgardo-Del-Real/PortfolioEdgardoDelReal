import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import './form.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from '../footer/footer';

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
       <form onSubmit={handleSubmit} 
  className='d-flex flex-column justify-content-center align-items-center p-4'>

  <h6 className='titulo-con-icono text-secondary fw-bold mb-4'>
    LET'S KEEP IN TOUCH
  </h6>

  <section 
    className='container d-flex justify-content-center align-items-stretch p-3'>
      
      {/* Columna izquierda: formulario */}
      <section className='col-12 col-md-6 d-flex flex-column content-input justify-content-center align-items-center'>
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
          className='btn-sb fs-6'>
          SUBMIT
        </button>
      </section>

      {/* Columna derecha: contacto */}
      <section className="col-12 col-md-5 d-flex align-items-stretch justify-content-center align-items-center responsive-contacto">
          <Footer />
      </section>
  </section>
</form>
    );
};

export default Form;
