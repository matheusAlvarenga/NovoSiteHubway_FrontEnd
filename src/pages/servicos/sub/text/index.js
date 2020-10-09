import React from 'react';

import './style.css';

export default function TextsServico({ dados, lado }) {
    let classes;

    if (lado == 'dir') {
        classes = 'texto-servico-container left';
    } else {
        classes = 'texto-servico-container right';
    }

    return (
        <div className={classes}>
            <p className="acima texto-gradiente">{dados.acima}</p>
            <h2 className="titulo">{dados.nome}</h2>
            <p className="resumo">{dados.resumo}</p>
            <button className="btn-padrao btn">Saiba Mais</button>
        </div>
    );
}
