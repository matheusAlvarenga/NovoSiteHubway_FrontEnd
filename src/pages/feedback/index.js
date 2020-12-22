import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './style.css';

export default function Feedback({ dados, textos }) {
    const [estadoFeedback, changeEstadoFeedback] = useState(1);

    function feedbackMap(dados) {
        return dados.map((feed, key) => {
            let display_m;
            if (key % 2 == estadoFeedback) {
                display_m = 'block';
            } else {
                display_m = 'none';
            }

            return (
                <div
                    style={{ display: display_m }}
                    className="feedback"
                    key={key}
                >
                    <h3>{feed.autor}</h3>
                    <p>{feed.cargo}</p>
                    <p>{feed.mensagem}</p>
                    <p className="data">{feed.data}</p>
                </div>
            );
        });
    }

    function MudaFeedback() {
        if (estadoFeedback == 1) {
            changeEstadoFeedback(0);
        } else {
            changeEstadoFeedback(1);
        }
        return null;
    }

    return (
        <div className="feedback-container">
            <div className="header">
                <div className="esq">
                    <p>{textos.acima}</p>
                    <h2>FEEDBACK DE CLIENTES</h2>
                </div>
                <div className="dir">
                    {/* <div className="quadrado"></div>
                    <div className="quadrado active"></div>
                    <div className="quadrado"></div> */}
                </div>
            </div>
            <div className="embaixo">
                <div className="seta-esq">
                    <FiChevronLeft
                        onClick={() => MudaFeedback()}
                    ></FiChevronLeft>
                </div>
                {feedbackMap(dados)}
                <div className="seta-dir">
                    <FiChevronRight
                        onClick={() => MudaFeedback()}
                    ></FiChevronRight>
                </div>
            </div>
        </div>
    );
}
