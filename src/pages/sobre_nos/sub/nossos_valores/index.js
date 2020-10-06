import React from 'react';

import './style.css';

export default function NossosValores({ dados, textos }) {
    return (
        <div className="nossos-valores-container">
            <div className="header">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="paragrafo">{textos.paragrafo}</p>
            </div>
            <div className="lista-titulo">
                <div className="titulos">
                    <p>Lorem Ipsum</p>
                </div>
                <div className="titulos active">
                    <p>Lorem Ipsum</p>
                </div>
                <div className="titulos">
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className="corpo">
                <div className="imagem">
                    <img src="https://images.unsplash.com/photo-1601919263076-4a6a8514c461" />
                </div>
                <div className="paragrafo">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse interdum neque eu est ultricies, sit amet
                        convallis odio bibendum. In consectetur porttitor
                        semper. Phasellus vestibulum quis urna vel fermentum.
                        Morbi placerat condimentum urna id convallis. Duis in
                        arcu velit. Pellentesque dictum nisl enim, at
                        consectetur lacus lacinia vel. Cras ipsum eros, aliquet
                        et diam quis, fringilla molestie est. Nulla placerat
                        nisi eget lorem auctor consequat. In hac habitasse
                        platea dictumst. Nullam iaculis augue at metus feugiat
                        fringilla. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        Cras suscipit non urna sit amet sagittis.<br></br> Ut
                        dignissim sapien sapien, elementum tincidunt odio
                        rhoncus vitae. Praesent eu augue sodales, aliquet arcu
                        non, hendrerit justo.
                    </p>
                </div>
            </div>
        </div>
    );
}
