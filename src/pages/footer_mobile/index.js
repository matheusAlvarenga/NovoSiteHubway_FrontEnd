import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import Logo from '../../assets/logo_pq_branco.png';

import './style.css';

export default function FooterMobile() {
    return (
        <div className="footer-container-mobile">
            <div className="primeira">
                <div className="logo">
                    <img src={Logo} alt="Logo Hubway" />
                </div>
                <div className="resumo">
                    <p>
                        Desde 2015 trabalhando com as principais empresas do mercado com o 
                        objetivo de gerar oportunidades e impacto real nas vendas.
                    </p>
                </div>
            </div>
            <div className="segunda">
                <div className="left">
                    <h3>Contato</h3>
                    <div className="endereco">
                        <p>Av. Paulista 171, 4º andar, São Paulo</p>
                        <p>SP - Brasil</p>
                    </div>
                    <div className="contato">
                        <p>(11) 9 8955-5962</p>
                        <p>contato@hubway.com.br</p>
                    </div>
                </div>
                <div className="right">
                    <h3>Social</h3>
                    <ul>
                        <li>
                            <FaFacebookSquare /> Facebook
                        </li>
                        <li>
                            <FaLinkedin /> Linkedin
                        </li>
                        <li>
                            <FaTwitterSquare /> Linkedin
                        </li>
                    </ul>
                </div>
            </div>
            <div className="divider">
                <div></div>
            </div>
            <div className="copyright">
                <p>© COPYRIGHT 2020 POR HUBWAY.COM.BR</p>
            </div>
        </div>
    );
}
