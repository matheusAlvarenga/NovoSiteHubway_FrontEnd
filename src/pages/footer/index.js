import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import Logo from '../../assets/logo_pq_branco.png';

import './style.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="esq">
                    <div className="logo">
                        <img src={Logo} alt="Logo Hubway" height={50} />
                    </div>
                    <div className="resumo">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec volutpat pellentesque turpis eu pretium.
                            Mauris cursus elit sit amet semper ullamcorper.
                            Mauris sed enim rhoncus, maximus justo quis,
                            consequat neque. Aliquam mattis vehicula orci a
                            maximus. Aenean at risus quam. Vivamus sed consequat
                            tellus.
                        </p>
                    </div>
                </div>
                <div className="meio">
                    <h3>Contato</h3>
                    <div className="endereco">
                        <p>Av. Paulista 454, São Paulo</p>
                        <p>SP - Brasil</p>
                    </div>
                    <div className="contato">
                        <p>(11) 99999-9999</p>
                        <p>fernando@hubway.com.br</p>
                    </div>
                </div>
                <div className="dir">
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
