import React from 'react';
import { FaEdit } from 'react-icons/fa';

export default function Paginas() {
    return (
        <div className="paginas-admin-container">
            <div className="quadrado">
                <FaEdit></FaEdit>
            </div>
            <div className="corpo">
                <p>Editor de Páginas</p>
                <div className="divider"></div>
                <div className="principal">
                    <div className="lista">
                        <div className="item">
                            <p>Index</p>
                        </div>
                        <div className="item">
                            <p>Sobre Nós</p>
                        </div>
                        <div className="item">
                            <p>Serviços</p>
                        </div>
                        <div className="item">
                            <p>Técnologia</p>
                        </div>
                        <div className="item">
                            <p>Fale Conosco</p>
                        </div>
                    </div>
                    <div className="workstation"></div>
                </div>
            </div>
        </div>
    );
}
