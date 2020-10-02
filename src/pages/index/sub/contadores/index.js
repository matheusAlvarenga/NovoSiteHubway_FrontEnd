import React from 'react';

import Imagem1 from '../../../../assets/index/photo_2.png';

import './style.css';

export default function Contadores({ dados, textos }) {
    return (
        <div className="contadores-container">
            <div className="img-sob">
                <img src={Imagem1} />
            </div>
            <div className="primeiro">
                <div className="contador">
                    <div className="cima">
                        <p className="numero">6</p>
                    </div>
                    <p className="descricao">Anos de Mercado</p>
                </div>
                <div className="contador">
                    <div className="cima">
                        <p className="mais">+</p>
                        <p className="numero">600</p>
                    </div>
                    <p className="descricao">Anos de Mercado</p>
                </div>
                <div className="contador">
                    <div className="cima">
                        <p className="mais">+</p>
                        <p className="numero">600</p>
                        <p className="mil">K</p>
                    </div>
                    <p className="descricao">Anos de Mercado</p>
                </div>
                <div className="contador">
                    <div className="cima">
                        <p className="numero">6</p>
                    </div>
                    <p className="descricao">Anos de Mercado</p>
                </div>
            </div>
            <div className="segundo">
                <h2>{textos.titulo}</h2>
                <button className="btn texto-gradiente">
                    Falar com Consultor
                </button>
            </div>
        </div>
    );
}
