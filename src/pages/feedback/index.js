import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './style.css';

export default function Feedback({ dados, textos }) {
    return (
        <div className="feedback-container">
            <div className="header">
                <div className="esq">
                    <p>{textos.acima}</p>
                    <h2>FEEDBACK DE CLIENTES</h2>
                </div>
                <div className="dir">
                    <div className="quadrado"></div>
                    <div className="quadrado active"></div>
                    <div className="quadrado"></div>
                </div>
            </div>
            <div className="embaixo">
                <div className="seta-esq">
                    <FiChevronLeft></FiChevronLeft>
                </div>
                <div className="feedback">
                    <h3>Matheus Alvarenga</h3>
                    <p>Cargo</p>
                    <p>
                        “Rapidiously synthesize parallel information rather than
                        web-enabled infrastructures. Rapidiously conceptualize
                        intuitive paradigms before optimal synergy. Globally
                        benchmark wireless interfaces whereas tactical
                        meta-services.”
                    </p>
                    <p className="data">22/09/2020</p>
                </div>
                <div className="feedback">
                    <h3>Matheus Alvarenga</h3>
                    <p>Cargo</p>
                    <p>
                        “Rapidiously synthesize parallel information rather than
                        web-enabled infrastructures. Rapidiously conceptualize
                        intuitive paradigms before optimal synergy. Globally
                        benchmark wireless interfaces whereas tactical
                        meta-services.”
                    </p>
                    <p className="data">22/09/2020</p>
                </div>
                <div className="seta-dir">
                    <FiChevronRight></FiChevronRight>
                </div>
            </div>
        </div>
    );
}
