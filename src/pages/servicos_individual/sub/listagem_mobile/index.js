import React from 'react';

import './style.css';

function mapItens(dados) {
    let arr_dados = dados.split(';');

    return arr_dados.map((item) => {
        return (
            <li>
                <div>
                    <p>-</p>
                    <p>{item}</p>
                </div>
            </li>
        );
    });
}

function mapListas(dados) {
    return dados.map((list) => {
        return (
            <div className="item">
                <div className="titulo">
                    <h3>{list.titulo}</h3>
                </div>
                <div className="divider texto-gradiente"></div>
                <ul>{mapItens(list.items)}</ul>
            </div>
        );
    });
}

export default function Listagem({ dados }) {
    return (
        <div className="listagem-servico-m-container">
            <div className="header">
                <p className="texto-gradiente">{dados.acima}</p>
                <h2>{dados.titulo}</h2>
            </div>
            <div className="list">{mapListas(dados.lista)}</div>
        </div>
    );
}
