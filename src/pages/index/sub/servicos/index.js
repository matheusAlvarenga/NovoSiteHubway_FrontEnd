import React from 'react';

import Imagem1 from '../../../../assets/servicos_icones/1.png';
import Imagem2 from '../../../../assets/servicos_icones/2.png';
import Imagem3 from '../../../../assets/servicos_icones/3.png';
import Imagem4 from '../../../../assets/servicos_icones/4.png';
import Imagem5 from '../../../../assets/servicos_icones/5.png';

import './style.css';

export default function Servicos_Resumo({ dados }) {
    return (
        <div className="servicos-resumo-container">
            <div className="header">
                <p className="acima texto-gradiente">TESTE MKT</p>
                <h2 className="titulo">TESTE TITULO TOPZERA TIU</h2>
                <p className="paragrafo">
                    Teste de um paragrafo bem topzera mesmo
                </p>
            </div>
            <div className="lista">
                <div className="servico">
                    <img height={93} src={Imagem1}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
                <div className="servico">
                    <img height={93} src={Imagem2}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
                <div className="servico">
                    <img height={93} src={Imagem3}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
                <div className="servico">
                    <img height={93} src={Imagem4}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
                <div className="servico">
                    <img height={93} src={Imagem5}></img>
                    <p>TESTE DE UM SERVIÇO</p>
                </div>
            </div>
            <div className="ver-mais">
                <p>Ver Mais</p>
            </div>
        </div>
    );
}
