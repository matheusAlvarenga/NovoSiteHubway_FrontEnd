import React from 'react';

import './style.css';

function mapContatos(dados) {
    return dados.map((cnt) => {
        return (
            <div className="contato">
                <p className="linha_um">{cnt.linha_um}</p>
                <p className="linha_dois">{cnt.linha_dois}</p>
                <p className="linha_tres">{cnt.linha_tres}</p>
            </div>
        );
    });
}

export default function Contatos({ dados }) {
    return (
        <div className="contatos-m-container">
            <h2>Nossos Contatos</h2>
            <div className="lista">{mapContatos(dados)}</div>
        </div>
    );
}
