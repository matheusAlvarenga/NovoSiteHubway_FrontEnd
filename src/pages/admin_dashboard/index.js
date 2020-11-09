import React, { useState } from 'react';

import './style.css';

import AsideMenu_Admin from './sub/aside_menu';
import Header from './sub/header';

export default function Dashboard_Admin() {
    const [menu_ativ, MudaMenu_ativ] = useState('dash');
    return (
        <div className="dashboard-container">
            <AsideMenu_Admin
                menu_ativo={menu_ativ}
                MudaMenu_ativo={(a) => MudaMenu_ativ(a)}
            ></AsideMenu_Admin>
            <div className="body">
                <Header titulo={menu_ativ}></Header>
            </div>
        </div>
    );
}
