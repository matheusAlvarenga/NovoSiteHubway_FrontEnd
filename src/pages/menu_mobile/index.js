import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

export default function Menu({ estado = true, click = () => {}, page }) {
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
                        <li className={page == 'home' ? 'active' : 'desactive'}>
                            <Link to="/">Início</Link>
                        </li>
                        <li
                            className={page == 'sobre' ? 'active' : 'desactive'}
                        >
                            <Link to="/sobre-nos">Sobre Nós</Link>
                        </li>
                        <li
                            className={
                                page == 'servicos' ? 'active' : 'desactive'
                            }
                        >
                            <Link to="/servicos">Serviços</Link>
                        </li>
                        <li className={page == 'tech' ? 'active' : 'desactive'}>
                            <Link to="/tecnologias">Tecnologias</Link>
                        </li>
                        <li className={page == 'blog' ? 'active' : 'desactive'}>
                            <Link to="/">Blog</Link>
                        </li>
                        <li className={page == 'fale' ? 'active' : 'desactive'}>
                            <Link to="/">Fale Conosco</Link>
                        </li>
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
