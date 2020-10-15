import React from 'react';

import './style.css';

export default function ResumoUm({ textos }) {
    return (
        <div className="servico-resumo-m-container">
            <div className="right">
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="subtitulo texto-gradiente">{textos.subtitulo}</p>
                <p className="texto">{textos.texto}</p>
            </div>
            <img src={textos.foto} />
        </div>
    );
}
