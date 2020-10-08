import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import Imagem1 from '../../../../assets/index/photo_2.png';

import './style.css';

function mapContadores(dados) {
    return dados.map((contador) => {
        let numero;

        if (contador.numero.includes('+') && contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <p className="mais">+</p>
                    <CountUp
                        duration={3}
                        start={0}
                        end={parseInt(contador.numero)}
                        useEasing={false}
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className="numero" ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <p className="mil">K</p>
                </div>
            );
        }

        if (contador.numero.includes('+') && !contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <p className="mais">+</p>
                    <CountUp
                        duration={3}
                        start={0}
                        end={parseInt(contador.numero)}
                        useEasing={false}
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className="numero" ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </div>
            );
        }

        if (!contador.numero.includes('+') && contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <CountUp
                        duration={3}
                        start={0}
                        end={parseInt(contador.numero)}
                        useEasing={false}
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className="numero" ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <p className="mil">K</p>
                </div>
            );
        }

        if (!contador.numero.includes('+') && !contador.numero.includes('K')) {
            numero = (
                <div className="cima">
                    <CountUp
                        duration={3}
                        start={0}
                        end={parseInt(contador.numero)}
                        useEasing={false}
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className="numero" ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </div>
            );
        }

        return (
            <div className="contador">
                {numero}
                <p className="descricao">{contador.descricao}</p>
            </div>
        );
    });
}

export default function Contadores({ dados, textos }) {
    return (
        <div className="contadores-m-container">
            <div className="primeiro">{mapContadores(dados)}</div>
            <div className="segundo">
                <div className="img-sob">
                    <img src={Imagem1} />
                </div>
                <div className="textos">
                    <h2>{textos.titulo}</h2>
                    <button className="btn texto-gradiente">
                        Falar com Consultor
                    </button>
                </div>
            </div>
        </div>
    );
}
