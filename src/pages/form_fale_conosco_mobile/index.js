import React from 'react';

import './style.css';

export default function FormFaleConosco({ textos }) {
    return (
        <div className="form-fale-conosco-m-container">
            <div className="header">
                <p className="acima texto-gradiente">{textos.acima}</p>
                <h2 className="titulo">{textos.titulo}</h2>
                <p className="paragrafo">{textos.paragrafo}</p>
            </div>
            <div className="formulario">
                <form>
                    <div className="grupo">
                        <input type="text" placeholder="Primeiro Nome" />
                    </div>
                    <div className="grupo">
                        <input type="text" placeholder="Sobrenome" />
                    </div>
                    <div className="grupo">
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div className="grupo">
                        <input type="text" placeholder="Empresa" />
                    </div>
                    <div className="grupo">
                        <input type="text" placeholder="Telefone" />
                    </div>
                    <div className="grupo">
                        <input type="text" placeholder="Assunto" />
                    </div>
                    <div className="text-area">
                        <textarea placeholder="Mensagem"></textarea>
                    </div>
                    <div className="grupo">
                        <button className="texto-gradiente">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
