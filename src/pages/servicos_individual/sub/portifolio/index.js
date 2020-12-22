import React, { useState } from 'react';

import './style.css';
import { useParams } from 'react-router-dom';

export default function Portifolio({ textos }) {
    function mapItems(dados) {
        return dados.map((dad, key) => {
            return (
                <div
                    className={selecionado === key + 1 ? 'item active' : 'item'}
                    onClick={() => {
                        setselecionado(key + 1);
                    }}
                >
                    <p>0{key + 1}</p>
                </div>
            );
        });
    }

    function mapImg(dados) {
        return dados.map((dad, key) => {
            return (
                <img
                    src={textos[selecionado - 1]}
                    className={
                        selecionado == key + 1 ? 'ativado' : 'desativado'
                    }
                />
            );
        });
    }

    const [selecionado, setselecionado] = useState(1);
    if (textos[0] == 'none') {
        return null;
    } else {
        return (
            <div className="portifolio-container">
                <div className="lista">{mapItems(textos)}</div>
                <div className="fotos">{mapImg(textos)}</div>
            </div>
        );
    }
}
