import React, { useState } from 'react';

import './style.css';

export default function NossosValores({ dados, textos }) {
    const [escolhido, setEscolhido] = useState({
        id: 0,
        paragrafo: dados[0].texto,
        imagem: dados[0].imagem,
    });

    function troca(key, texto, img) {
        setEscolhido({
            id: key,
            paragrafo: texto,
            imagem: img,
        });
    }

    return (
        <div className="nossos-valores-m-container">
            <div className="header">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="paragrafo">{textos.paragrafo}</p>
            </div>
            <div className="lista-titulo">
                {dados.map((tit, key) => {
                    return (
                        <div
                            onClick={(titu) =>
                                troca(key, dados[key].texto, dados[key].imagem)
                            }
                            className={
                                escolhido.id === key
                                    ? 'titulos active'
                                    : 'titulos'
                            }
                            key={key}
                        >
                            <p>{tit.titulo}</p>
                        </div>
                    );
                })}
            </div>
            <div className="corpo">
                <div className="paragrafo">
                    <p>{escolhido.paragrafo}</p>
                </div>
                <div className="imagem">
                    <img src={escolhido.imagem} />
                </div>
            </div>
        </div>
    );
}
