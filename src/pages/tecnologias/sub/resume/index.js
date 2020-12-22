import React from 'react';

import './style.css';

import TextoServico from '../text';

export default function ResumoServico({ dados, chave }) {
    let lado;
    let classes;
    let imagem2;

    console.log(chave);

    if (chave++ % 2 == 0) {
        lado = 'esq';
        classes = 'resumo-servico-container-left';
        imagem2 = <img src={dados.photo} />;
    } else {
        lado = 'dir';
        classes = 'resumo-servico-container-right';
        imagem2 = <img src={dados.photo} />;
    }

    return (
        <div className={classes}>
            {imagem2}
            <TextoServico dados={dados} lado={lado}></TextoServico>
        </div>
    );
}
