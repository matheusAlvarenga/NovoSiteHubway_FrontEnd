import React, { Component } from 'react';

import './style.css';

function mapTech(dados) {
    return dados.map((tech, key) => {
        let img;
        switch (key) {
            case 0:
                img = <img src={tech.logo}></img>;
                break;
            case 1:
                img = <img src={tech.logo}></img>;
                break;
            case 2:
                img = <img src={tech.logo}></img>;
                break;
            case 3:
                img = <img src={tech.logo}></img>;
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
        <div className="tecnologias-resumo-container">
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
