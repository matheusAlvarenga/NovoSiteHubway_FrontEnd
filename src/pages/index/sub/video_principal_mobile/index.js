import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function VideoPrincipal() {
    return (
        <div className="video-principal-container-m">
            <div class="textos">
                <h1>Marketing Digital</h1>
                <h2>para gerar mais Negócios</h2>
                <Link to="fale-conosco">FALE COM UM ESPECIALISTA</Link>
            </div>
        </div>
    );
}
