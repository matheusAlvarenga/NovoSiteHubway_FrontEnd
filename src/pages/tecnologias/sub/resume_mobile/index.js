import React from 'react';

import './style.css';

import TextoServico from '../text_mobile';

export default function ResumoServico({ dados, chave }) {
    let imagem2;

    console.log(chave);

    if (chave++ % 2 == 0) {
        imagem2 = <img src={dados.photo} />;
    } else {
        imagem2 = <img src={dados.photo} />;
    }

    return (
        <div className="resumo-servico-container-m">
            <TextoServico dados={dados}></TextoServico>
            {imagem2}
        </div>
    );
}
