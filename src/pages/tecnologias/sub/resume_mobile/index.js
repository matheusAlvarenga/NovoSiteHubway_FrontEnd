import React from 'react';

import './style.css';
import Imagem1 from '../../../../assets/tecnologias/1.png';
import Imagem2 from '../../../../assets/tecnologias/2.png';

import TextoServico from '../text_mobile';

export default function ResumoServico({ dados, chave }) {

    let imagem2;

    console.log(chave);

    if (chave++ % 2 == 0) {
        imagem2 = <img src={Imagem1} />;
    } else {
        imagem2 = <img src={Imagem2} />;
    }

    return (
        <div className="resumo-servico-container-m">
            <TextoServico dados={dados}></TextoServico>
            {imagem2}
        </div>
    );
}
