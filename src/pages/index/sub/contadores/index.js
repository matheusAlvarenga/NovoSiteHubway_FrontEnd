import React from 'react';

import Imagem1 from '../../../../assets/index/photo_2.png';

import './style.css';

function mapContadores(dados) {
    return dados.map((contador) => {
        let numero;

        if (contador.numero.includes('+') && contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <p className="mais">+</p>
                    <p className="numero">{parseInt(contador.numero)}</p>
                    <p className="mil">K</p>
                </div>
            );
        }

        if (contador.numero.includes('+') && !contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <p className="mais">+</p>
                    <p className="numero">{parseInt(contador.numero)}</p>
                </div>
            );
        }

        if (!contador.numero.includes('+') && contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <p className="numero">{parseInt(contador.numero)}</p>
                    <p className="mil">K</p>
                </div>
            );
        }

        if (!contador.numero.includes('+') && !contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <p className="numero">{parseInt(contador.numero)}</p>
                </div>
            );
        }

        return (
            <div className="contador">
                {numero}
                <p className="descricao">{contador.descricao}</p>
            </div>
        );
    });
}

export default function Contadores({ dados, textos }) {
    return (
        <div className="contadores-container">
            <div className="img-sob">
                <img src={Imagem1} />
            </div>
            <div className="primeiro">{mapContadores(dados)}</div>
            <div className="segundo">
                <h2>{textos.titulo}</h2>
                <button className="btn texto-gradiente">
                    Falar com Consultor
                </button>
            </div>
        </div>
    );
}
