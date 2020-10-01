import React from 'react';
import './style.css';

import Logo from '../../assets/logo_pq_branco.png';

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={Logo} alt="Logo Hubway" height={35} />
            </div>
            <div className="menu">
                <ul>
                    <li>Início</li>
                    <li>Sobre Nós</li>
                    <li>Serviços</li>
                    <li>Tecnologias</li>
                    <li>Blog</li>
                    <li>Fale Conosco</li>
                </ul>
            </div>
        </div>
    );
}
