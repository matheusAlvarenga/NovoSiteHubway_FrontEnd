import React from 'react';
import { Link } from 'react-router-dom';

import Imagem1 from '../../../../assets/servicos_icones/1.png';
import Imagem2 from '../../../../assets/servicos_icones/2.png';
import Imagem3 from '../../../../assets/servicos_icones/3.png';
import Imagem4 from '../../../../assets/servicos_icones/4.png';
import Imagem5 from '../../../../assets/servicos_icones/5.png';

import './style.css';

function mapServicos(dados) {
    return dados.map((servico, key) => {
        let img;
        let classes;

        switch (key) {
            case 0:
                img = <img height={93} src={Imagem1}></img>;
                break;
            case 1:
                img = <img height={93} src={Imagem2}></img>;
                break;
            case 2:
                img = <img height={93} src={Imagem3}></img>;
                break;
            case 3:
                img = <img height={93} src={Imagem4}></img>;
                break;
            case 4:
                img = <img height={93} src={Imagem5}></img>;
                break;
        }

        return (
            <Link to={servico.link}>
                <div className="servico">
                    {img}
                    <p>{servico.nome}</p>
                </div>
            </Link>
        );
    });
}

export default function Servicos_Resumo({ dados, textos }) {
    return (
        <div className="servicos-resumo-s-container">
            <div className="header">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="paragrafo">{textos.paragrafo}</p>
            </div>
            <div className="lista">{mapServicos(dados)}</div>
            <div className="ver-mais">
                <p>Ver Mais</p>
            </div>
        </div>
    );
}
