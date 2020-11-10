import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function TextsServico({ dados, lado }) {
    return (
        <div className="texto-servico-container-m">
            <p className="acima texto-gradiente">{dados.acima}</p>
            <h2 className="titulo">{dados.nome}</h2>
            <p className="resumo">{dados.resumo}</p>
            <Link to={dados.link}>
                <button className="btn-padrao btn">{dados.botao}</button>
            </Link>
        </div>
    );
}
