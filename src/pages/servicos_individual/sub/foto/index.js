import React from 'react';

import './style.css';

export default function Foto({ dados }) {
    return (
        <div className="foto-servico-container">
            <img src={dados} />
        </div>
    );
}
