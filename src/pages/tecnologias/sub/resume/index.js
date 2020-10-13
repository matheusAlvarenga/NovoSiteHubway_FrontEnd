import React from 'react';

import './style.css';
import Imagem1 from '../../../../assets/tecnologias/1.png';
import Imagem2 from '../../../../assets/tecnologias/2.png';

import TextoServico from '../text';

export default function ResumoServico({ dados, chave }) {
    let lado;
    let classes;
    let imagem2;

    console.log(chave);

    if (chave++ % 2 == 0) {
        lado = 'esq';
        classes = 'resumo-servico-container-left';
        imagem2 = <img src={Imagem1} />;
    } else {
        lado = 'dir';
        classes = 'resumo-servico-container-right';
        imagem2 = <img src={Imagem2} />;
    }

    return (
        <div className={classes}>
            {imagem2}
            <TextoServico dados={dados} lado={lado}></TextoServico>
        </div>
    );
}
