import React from 'react';
import { BsFillBellFill, BsPersonFill } from 'react-icons/bs';

import './style.css';

export default function HeaderAdmin({ titulo }) {
    let tit;

    switch (titulo) {
        case 'dash':
            tit = 'Dashboard';

            break;

        case 'posts':
            tit = 'Blog / Posts';

            break;

        case 'comm':
            tit = 'Comentários';

            break;

        case 'serv':
            tit = 'Serviços';

            break;

        case 'tecn':
            tit = 'Tecnologias';

            break;

        case 'cont':
            tit = 'Contatos';

            break;

        case 'pagi':
            tit = 'Editor de Páginas';

            break;
    }

    return (
        <div className="header-admin-container">
            <p>{tit}</p>
            <div className="right">
                <div className="bell">
                    <BsFillBellFill></BsFillBellFill>
                    <div className="circle"></div>
                </div>
                <div className="user">
                    <BsPersonFill></BsPersonFill>
                </div>
            </div>
        </div>
    );
}
