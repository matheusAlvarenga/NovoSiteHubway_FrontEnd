import React from 'react';

import './style.css';

export default function BannerFaleConosco({ textos }) {
    return (
        <div className="banner-faleconosco-m-container">
            <p>{textos.frase}</p>
            <button className="btn-padrao">{textos.button}</button>
        </div>
    );
}
