import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import './style.css';

import Logo from '../../assets/logo_pq_branco.png';

export default function HeaderMobile() {
    const [navbar, setNavbar] = useState(0);

    const changeBackground = () => {
        if (window.scrollY >= 350) {
            setNavbar(1);
        } else {
            setNavbar(0);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div
            className={
                navbar === 1
                    ? 'header-m-container active'
                    : 'header-m-container'
            }
        >
            <div className="logo">
                <img src={Logo} alt="Logo Hubway" height={35} />
            </div>
            <div className="menu">
                <FiMenu></FiMenu>
            </div>
        </div>
    );
}
