import React, { Component } from 'react';

import Imagem1 from '../../../../assets/tecnologias_fotos/1.png';
import Imagem2 from '../../../../assets/tecnologias_fotos/2.png';
import Imagem3 from '../../../../assets/tecnologias_fotos/3.png';
import Imagem4 from '../../../../assets/tecnologias_fotos/4.png';

import './style.css';

function mapTech(dados) {
    return dados.map((tech, key) => {
        let img;
        switch (key) {
            case 0:
                img = <img src={Imagem1}></img>;
                break;
            case 1:
                img = <img src={Imagem2}></img>;
                break;
            case 2:
                img = <img src={Imagem3}></img>;
                break;
            case 3:
                img = <img src={Imagem4}></img>;
                break;
        }

        return (
            <div className="tech">
                {img}
                <p>{tech.nome}</p>
            </div>
        );
    });
}

export default function Tecnologia_Resumo({ textos, dados }) {
    return (
        <div className="tecnologias-resumo-t-container">
            <div className="header">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="paragrafo">{textos.paragrafo}</p>
            </div>
            <div className="lista">{mapTech(dados)}</div>
            <div className="ver-mais">
                <p>Ver Mais</p>
            </div>
        </div>
    );
}
