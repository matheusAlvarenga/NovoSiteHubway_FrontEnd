import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Logo from '../../assets/logo_pq_branco.png';

export default function Header() {
    const [navbar, setNavbar] = useState(0);

    const changeBackground = () => {
        if (window.scrollY >= 350) {
            setNavbar(1);
        } else {
            setNavbar(0);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div
            className={
                navbar === 1 ? 'header-container active' : 'header-container'
            }
        >
            <div className="logo">
                <img src={Logo} alt="Logo Hubway" height={35} />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/sobre-nos">Sobre Nós</Link>
                    </li>
                    <li>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/tecnologias">Tecnologias</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/fale-conosco">Fale Conosco</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
