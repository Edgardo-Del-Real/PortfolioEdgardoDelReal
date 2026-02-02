import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import './form.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from '../footer/footer';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Tus credenciales de EmailJS (asegúrate de que sean las correctas)
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
                setSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                // Limpiar mensaje después de 5 segundos
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
       <section className='contact-section d-flex align-items-center' id='contact-section'>
          <div className="container">
              <div className="row mb-5">
                  <div className="col-12 text-center">
                      <h6 className='text-secondary fw-bold tracking-widest'>CONTACTO</h6>
                      <h2 className='text-white fw-bold display-5'>Escríbeme</h2>
                  </div>
              </div>

              <div className="row justify-content-center align-items-stretch g-5">
                  {/* Formulario */}
                  <div className="col-12 col-lg-6">
                      <form onSubmit={handleSubmit} className="contact-form p-4 h-100 d-flex flex-column justify-content-center">
                          <div className="mb-3">
                              <input
                                  type="text"
                                  className="form-control custom-input"
                                  value={name}
                                  placeholder='Nombre Completo'
                                  onChange={(e) => setName(e.target.value)}
                                  required
                                  disabled={isSubmitting}
                              />
                          </div>
                          <div className="mb-3">
                              <input
                                  type="email"
                                  className="form-control custom-input"
                                  placeholder='Email'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                  disabled={isSubmitting}
                              />
                          </div>
                          <div className="mb-3">
                              <textarea
                                  className="form-control custom-input"
                                  placeholder='Tu Mensaje'
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  rows="5"
                                  required
                                  disabled={isSubmitting}
                              ></textarea>
                          </div>

                          <button type='submit' className='btn-submit w-100' disabled={isSubmitting}>
                              {isSubmitting ? (
                                  <span><span className="spinner-border spinner-border-sm me-2"></span>Enviando...</span>
                              ) : (
                                  'ENVIAR MENSAJE'
                              )}
                          </button>

                          {/* Mensajes de Feedback */}
                          {submitStatus === 'success' && (
                              <div className="alert alert-success mt-3 text-center border-0 bg-success bg-opacity-25 text-success animate-fade-in">
                                  <i className="bi bi-check-circle-fill me-2"></i>
                                  ¡Mensaje enviado con éxito! 🎉
                              </div>
                          )}
                          {submitStatus === 'error' && (
                              <div className="alert alert-danger mt-3 text-center border-0 bg-danger bg-opacity-25 text-danger animate-fade-in">
                                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                  Hubo un error. Intenta nuevamente.
                              </div>
                          )}
                      </form>
                  </div>

                  {/* Info de Contacto (Reutilizando tu componente Footer/Contacto) */}
                  <div className="col-12 col-lg-5">
                      <div className="h-100 d-flex flex-column justify-content-center">
                          <Footer />
                      </div>
                  </div>
              </div>
          </div>
       </section>
    );
};

export default Form;