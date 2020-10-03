import React from 'react';

import Imagem1 from '../../../../assets/index/photo_1.png';

import './style.css';

export default function Sobre_Nos_Resumo({ textos }) {
    return (
        <div className="sobre-nos-resumo-container">
            <div className="esq">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="paragrafo">{textos.paragrafo}</p>
                <button className="btn-padrao btn">Saiba Mais</button>
            </div>
            <div className="dir">
                <img height={515} src={Imagem1} />
            </div>
        </div>
    );
}
