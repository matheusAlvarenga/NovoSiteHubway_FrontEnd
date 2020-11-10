import React from 'react';

import Imagem1 from '../../../../assets/servicos_icones/1.png';
import Imagem2 from '../../../../assets/servicos_icones/2.png';
import Imagem3 from '../../../../assets/servicos_icones/3.png';
import Imagem4 from '../../../../assets/servicos_icones/4.png';
import Imagem5 from '../../../../assets/servicos_icones/5.png';

import './style.css';

function mapServicos(dados) {
    return dados.map((servico, key) => {
        return (
            <div className="servico">
                <img height={93} src={servico.icone}></img>
                <p>{servico.nome}</p>
            </div>
        );
    });
}

export default function Servicos_Resumo({ dados, textos }) {
    return (
        <div className="servicos-resumo-container">
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
