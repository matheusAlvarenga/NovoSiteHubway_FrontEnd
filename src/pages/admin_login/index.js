import React, { Component } from 'react';

import './style.css';

import Logo from '../../assets/logo_pq_branco.png';

export default class Menu_Admin extends Component {
    render() {
        return (
            <div className="admin-login-container">
                <div className="form">
                    <img src={Logo} />
                    <form>
                        <input type="text" placeholder="Usuário" />
                        <input type="password" placeholder="Senha" />
                        <button className="texto-gradiente">Entrar</button>
                    </form>
                </div>
            </div>
        );
    }
}
