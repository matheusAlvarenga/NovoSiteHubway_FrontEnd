import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Logo from '../../assets/logo_pq_branco.png';
import Menu from '../menu_mobile';

import './style.css';

export default function MobileHeader() {
    const [aberto, setAberto] = useState(false);

    return (
        <>
            <div className="mobile-header-container">
                <div className="hamb">
                    <FiMenu onClick={() => setAberto(!aberto)}></FiMenu>
                </div>
                <div className="logo">
                    <img src={Logo} />
                </div>
            </div>
            <Menu estado={aberto} click={() => setAberto(!aberto)}></Menu>
        </>
    );
}
