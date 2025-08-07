import React from 'react';

const Contacto = () => {
  const contactCards = [
    { icon: 'bi bi-person-circle', title: 'Nombre', text: 'Edgardo Del Real' },
    { icon: 'bi bi-telephone', title: 'Teléfono', text: '+54 9 11 1234-5678' },
    { icon: 'bi bi-envelope', title: 'Email', text: 'edgardo@email.com' },
  ];

  return (
    <section className="contacto d-flex flex-wrap justify-content-center gap-5 p-5">
      <div className="formulario">
        {/* Aquí iría tu formulario */}
        <h2 className="mb-4">Formulario de Contacto</h2>
        {/* ...inputs y botón */}
      </div>

      <div className="info-contacto d-flex flex-column gap-3">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="card text-center p-3 border-0 shadow-sm custom-card"
          >
            <i className={`${card.icon} fs-4 mb-2`}></i>
            <h6 className="fw-bold mb-1">{card.title}</h6>
            <p className="mb-0 small">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacto;
