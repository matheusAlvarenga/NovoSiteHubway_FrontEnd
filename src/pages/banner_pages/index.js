import React from 'react';

import './style.css';

export default function BannerPages({ textos }) {
    return (
        <div className="banner-pages-container">
            <p>{textos.breadcrumb}</p>
            <h1>{textos.titulo}</h1>
        </div>
    );
}
