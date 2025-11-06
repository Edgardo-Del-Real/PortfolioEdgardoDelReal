import React from 'react';

const Contacto = () => {
  const contactCards = [
    { icon: 'bi bi-person-circle', title: 'Name', text: 'Edgardo Del Real' },
    { icon: 'bi bi-telephone', title: 'Phone', text: '+54 9 3447-491803' },
    { icon: 'bi bi-envelope', title: 'Email', text: 'edgardodelreal@email.com' },
  ];

  return (
    <section className="d-flex flex-wrap justify-content-center mb-5 responsive-section">
      <div className="d-flex flex-column gap-3">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="card text-center p-3 border-0 shadow-sm custom-card w-100"
          >
            <i className={`${card.icon} fs-3 mb-1`}></i>
            <h6 className="fw-bold mb-1">{card.title}</h6>
            <p className="mb-2 small">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacto;
