import React, { Component } from 'react';

import Imagem1 from '../../../../assets/index/photo_1.png';

import './style.css';

export default class Sobre_Nos_Resumo extends Component {
    render() {
        return (
            <div className="sobre-nos-resumo-container">
                <div className="esq">
                    <p className="acima texto-gradiente">
                        Texto teste acima do titulo
                    </p>
                    <h2 className="titulo">
                        Teste de um titulo bem top que vai mudar dps
                    </h2>
                    <p className="paragrafo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam fermentum eleifend massa fermentum lacinia. Donec
                        condimentum tellus risus. Duis sit amet ligula libero.
                        Fusce elementum vulputate maximus. Mauris vel est vel
                        leo placerat blandit.
                    </p>
                    <button className="btn texto-gradiente">Saiba Mais</button>
                </div>
                <div className="dir">
                    <img height={515} src={Imagem1} />
                </div>
            </div>
        );
    }
}
