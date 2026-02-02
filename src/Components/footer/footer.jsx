import React from 'react';
import './footer.css'; // Importamos los estilos nuevos

const Footer = () => {
  const contactCards = [
    { icon: 'bi bi-person-circle', title: 'Nombre', text: 'Edgardo Del Real' },
    { icon: 'bi bi-envelope-fill', title: 'Email', text: 'edgardodelreal@email.com' },
    // Puedes agregar ubicación si quieres
    // { icon: 'bi bi-geo-alt-fill', title: 'Ubicación', text: 'Argentina' },
  ];

  return (
    <div className="contact-card-container">
      {contactCards.map((card, index) => (
        <div key={index} className="footer-card">
          {/* Icono a la izquierda */}
          <div className="footer-icon">
            <i className={card.icon}></i>
          </div>
          
          {/* Texto a la derecha */}
          <div className="d-flex flex-column">
            <span className="footer-title">{card.title}</span>
            <span className="footer-text">{card.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;