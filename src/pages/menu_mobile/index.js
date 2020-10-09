import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import './style.css';

export default function Menu({ estado = true, click = () => {} }) {
    const [teste, setTeste] = useState(false);

    let classes;
    let classes2;

    switch (estado) {
        case true:
            classes =
                'mobile-menu-container animate__animated animate__slideInLeft';
            classes2 = 'overlay animate__animated animate__fadeIn';
            break;
        case false:
            classes =
                'mobile-menu-container animate__animated animate__slideOutLeft';
            classes2 = 'overlay-n animate__animated animate__fadeOut';
    }

    return (
        <>
            <div className={classes}>
                <div className="header">
                    <div className="spacer"></div>
                    <div className="titulo">
                        <h2>Menu</h2>
                    </div>
                    <div className="closer">
                        <FiX onClick={click}></FiX>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li className="active">Início</li>
                        <li>Sobre Nós</li>
                        <li>Serviços</li>
                        <li>Tecnologias</li>
                        <li>Blog</li>
                        <li>Fale Conosco</li>
                    </ul>
                    <div className="footer">
                        <h3>Contatos</h3>
                        <p>Fernando Almeida</p>
                        <p>(11) 99999-9999</p>
                        <p>fernando@hubway.com.br</p>
                    </div>
                </div>
            </div>
            <div onClick={click} className={classes2}></div>
        </>
    );
}
