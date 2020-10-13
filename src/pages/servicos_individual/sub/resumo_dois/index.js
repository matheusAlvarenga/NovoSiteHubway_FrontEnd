import React from 'react';

import './style.css';

export default function ResumoDois({ textos }) {
    return (
        <div className="resumo-2-servicos-container">
            <div className="left">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h1 className="titulo">{textos.titulo}</h1>
                <p className="texto">{textos.texto}</p>
            </div>
            <img src={textos.foto} />
        </div>
    );
}
