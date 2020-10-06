import React from 'react';
import ScrollLock from 'react-scrolllock';

import Logo from '../../assets/logo_pq_branco.png';

import './style.css';

export default function AsideMenu({ estado = false }) {
    let display_v;

    if (estado == true) {
        display_v = 'block';
    } else {
        display_v = 'none';
    }

    return (
        <div style={{ display: display_v }} className="aside-menu-container">
            <ScrollLock isActive={estado} />
            <div className="fechar"></div>
            <div className="menu">
                <div className="logo">
                    <img src={Logo} />
                </div>
                <div className="corpo">
                    <div className="lista">
                        <div className="item">
                            <p>Home</p>
                        </div>
                        <div className="item">
                            <p>Sobre Nós</p>
                        </div>
                        <div className="item">
                            <p>Serviços</p>
                        </div>
                        <div className="item">
                            <p>Tecnologias</p>
                        </div>
                        <div className="item">
                            <p>Blog</p>
                        </div>
                        <div className="item">
                            <p>Fale Conosco</p>
                        </div>
                    </div>
                    <div className="footer">
                        <p className="titulo">Contato:</p>
                        <p className="contatos">(11) 99999-9999</p>
                        <p className="contatos">fernando@hubway.com.br</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
