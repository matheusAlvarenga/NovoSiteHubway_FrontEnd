import React from 'react';

import './style.css';

export default function ResumoUm({ textos }) {
    return (
        <div className="servico-resumo-s-container">
            <img src={textos.foto} />
            <div className="right">
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="subtitulo texto-gradiente">{textos.subtitulo}</p>
                <p className="texto">{textos.texto}</p>
            </div>
        </div>
    );
}
