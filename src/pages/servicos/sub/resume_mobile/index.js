import React from 'react';

import './style.css';
import Imagem1 from '../../../../assets/servicos/foto_1.png';
import Imagem2 from '../../../../assets/servicos/foto_2.png';

import TextoServico from '../text_mobile';

export default function ResumoServico({ dados, chave }) {
    return (
        <div className="resumo-servico-container-m">
            <TextoServico dados={dados}></TextoServico>
            <img src={dados.photo} />
        </div>
    );
}
