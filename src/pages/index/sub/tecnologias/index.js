import React, { Component } from 'react';

import Imagem1 from '../../../../assets/tecnologias_fotos/1.png';
import Imagem2 from '../../../../assets/tecnologias_fotos/2.png';
import Imagem3 from '../../../../assets/tecnologias_fotos/3.png';
import Imagem4 from '../../../../assets/tecnologias_fotos/4.png';

import './style.css';

export default function Tecnologia_Resumo({ textos }) {
    return (
        <div className="tecnologias-resumo-container">
            <div className="header">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="paragrafo">{textos.paragrafo}</p>
            </div>
            <div className="lista">
                <div className="tech">
                    <img src={Imagem1}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
                <div className="tech">
                    <img src={Imagem2}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
                <div className="tech">
                    <img src={Imagem3}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
                <div className="tech">
                    <img src={Imagem4}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
            </div>
            <div className="ver-mais">
                <p>Ver Mais</p>
            </div>
        </div>
    );
}
