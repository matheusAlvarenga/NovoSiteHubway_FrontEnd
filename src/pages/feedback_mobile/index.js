import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './style.css';

function changeFeedbacks(num1, num2) {}

function buttonsMap(dados) {
    const num_btn = dados.length;
}

function feedbackMap(dados) {
    return dados.map((feed, key) => {
        let display_m;
        if (key == 0) {
            display_m = 'block';
        } else {
            display_m = 'none';
        }

        return (
            <div style={{ display: display_m }} className="feedback" key={key}>
                <h3>{feed.autor}</h3>
                <p>{feed.cargo}</p>
                <p>{feed.mensagem}</p>
                <p className="data">{feed.data}</p>
            </div>
        );
    });
}

export default function Feedback({ dados, textos }) {
    return (
        <div className="feedback-m-container">
            <div className="header">
                <div className="esq">
                    <p>{textos.acima}</p>
                    <h2>FEEDBACK DE CLIENTES</h2>
                </div>
            </div>
            <div className="embaixo">
                <div className="seta-esq">
                    <FiChevronLeft></FiChevronLeft>
                </div>
                {feedbackMap(dados)}
                <div className="seta-dir">
                    <FiChevronRight></FiChevronRight>
                </div>
            </div>
        </div>
    );
}
