import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Efecto para detectar scroll y cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 991) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        /* La clase 'scrolled' se activa al bajar 50px, 
           cambiando el fondo de transparente a oscuro borroso 
        */
        <nav className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container d-flex justify-content-between justify-content-lg-center align-items-center py-2">
                
                {/* Opcional: Si quisieras un logo a la izquierda en el futuro
                   <div className="navbar-brand d-lg-none text-white fw-bold">EDR</div> 
                */}

                {/* Botón Hamburguesa (Visible solo en móvil) */}
                {/* 'ms-auto' lo empuja a la derecha si no hay logo */}
                <div 
                    className={`hamburger ms-auto d-lg-none ${isOpen ? 'open' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Menú de Enlaces */}
                <div className={`nav-menu-container ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list d-flex list-unstyled m-0 gap-4">
                        <li className="nav-item">
                            <Link 
                                to="hero" 
                                spy={true} 
                                smooth={true} 
                                offset={-80} // Compensa la altura del navbar
                                duration={500} 
                                className='nav-link-custom'
                                activeClass="active-link"
                                onClick={closeMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="about-me" 
                                spy={true} 
                                smooth={true} 
                                offset={-80}
                                duration={500} 
                                className='nav-link-custom'
                                activeClass="active-link"
                                onClick={closeMenu}>
                                ABOUT ME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="skills" 
                                spy={true} 
                                smooth={true} 
                                offset={-80}
                                duration={500} 
                                className='nav-link-custom'
                                activeClass="active-link"
                                onClick={closeMenu}>
                                SKILLS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="projects" /* Esto debe coincidir con el id="projects" de la sección */
                                spy={true} 
                                smooth={true} 
                                offset={-80}
                                duration={500}  
                                className='nav-link-custom'
                                activeClass="active-link"
                                onClick={closeMenu}>
                                PROJECTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="contact-section" 
                                spy={true} 
                                smooth={true} 
                                offset={-80}
                                duration={500}  
                                className='nav-link-custom'
                                activeClass="active-link"
                                onClick={closeMenu}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;