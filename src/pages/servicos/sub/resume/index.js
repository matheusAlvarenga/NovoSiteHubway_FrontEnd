import React from 'react';

import './style.css';
import Imagem1 from '../../../../assets/servicos/foto_1.png';
import Imagem2 from '../../../../assets/servicos/foto_2.png';

import TextoServico from '../text';

export default function ResumoServico({ dados, chave }) {
    let lado;
    let classes;

    console.log(chave);

    if (chave++ % 2 == 0) {
        lado = 'esq';
        classes = 'resumo-servico-container-left';
    } else {
        lado = 'dir';
        classes = 'resumo-servico-container-right';
    }

    return (
        <div className={classes}>
            <img src={dados.photo} />
            <TextoServico dados={dados} lado={lado}></TextoServico>
        </div>
    );
}
