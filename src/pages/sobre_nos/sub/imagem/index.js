import React from 'react';

import Imagem1 from '../../../../assets/sobre_nos/imagem_1.png';
import Imagem2 from '../../../../assets/sobre_nos/imagem_2.jpg';

import './style.css';

export default function Imagens({ textos }) {
    return (
        <div className="imagens-container">
            <img src={Imagem1} className="right" />
            <img src={Imagem2} className="abs" />
            <div className="textos">
                <div className="header">
                    <p>{textos.acima}</p>
                    <h2>{textos.titulo}</h2>
                </div>
                <div className="footer">
                    <p>DESDE</p>
                    <p>{textos.ano}</p>
                </div>
            </div>
        </div>
    );
}
