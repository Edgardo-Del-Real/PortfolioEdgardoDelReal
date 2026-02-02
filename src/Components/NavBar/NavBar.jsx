import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Efecto para cerrar el menú si se agranda la pantalla (opcional, buena práctica)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="sticky-top container navbar p-2 mt-4">
            {/* CAMBIO AQUÍ: 
                'justify-content-end': Alinea el botón a la derecha en móviles.
                'justify-content-md-center': Mantiene el menú centrado en escritorio (md+).
            */}
            <section className="d-flex flex-grow-1 justify-content-end justify-content-md-center position-relative align-items-center">
                
                {/* Botón Hamburguesa */}
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Menú de Navegación */}
                <ul className={`d-flex list-unstyled m-0 borde rounded-5 p-2 bg-opacity-50 bg-dark bg-black responsive-nav ${isOpen ? 'active' : ''}`}>
                    <li className="py-2 px-md-5 px-4">
                        <Link 
                            to="hero" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className='links'
                            onClick={closeMenu}>
                        HOME</Link>
                    </li>
                    <li className="py-2 px-md-5 px-4">
                        <Link 
                            to="about-me" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className='links'
                            onClick={closeMenu}>
                        ABOUT ME</Link>
                    </li>
                    <li className="py-2 px-md-5 px-4">
                        <Link 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className='links'
                            onClick={closeMenu}
                        >SKILLS</Link>
                    </li>
                    <li className="py-2 px-md-5 px-4">
                        <Link 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500}  
                            className='links'
                            onClick={closeMenu}>
                        PROJECTS</Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}

export default NavBar;