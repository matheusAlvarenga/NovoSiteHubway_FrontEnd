import React from 'react';
import {
    FaThLarge,
    FaNewspaper,
    FaRegCommentAlt,
    FaSitemap,
    FaDev,
    FaRegEnvelope,
    FaEdit,
} from 'react-icons/fa';

import './style.css';

import Logo from '../../../../assets/logo_pq_branco.png';

export default function AsideMenu_Admin({ menu_ativo, MudaMenu_ativo }) {
    return (
        <div className="aside-menu-admin-container">
            <img src={Logo} />
            <div className="divider"></div>
            <div className="lista">
                <div
                    onClick={() => MudaMenu_ativo('dash')}
                    className={menu_ativo == 'dash' ? 'item active' : 'item'}
                >
                    <FaThLarge></FaThLarge>
                    <p>Dashboard</p>
                </div>
                <div
                    onClick={() => MudaMenu_ativo('posts')}
                    className={menu_ativo == 'posts' ? 'item active' : 'item'}
                >
                    <FaNewspaper></FaNewspaper>
                    <p>Blog / Posts</p>
                </div>
                <div
                    onClick={() => MudaMenu_ativo('comm')}
                    className={menu_ativo == 'comm' ? 'item active' : 'item'}
                >
                    <FaRegCommentAlt></FaRegCommentAlt>
                    <p>Comentários</p>
                </div>
                <div
                    onClick={() => MudaMenu_ativo('serv')}
                    className={menu_ativo == 'serv' ? 'item active' : 'item'}
                >
                    <FaSitemap></FaSitemap>
                    <p>Serviços</p>
                </div>
                <div
                    onClick={() => MudaMenu_ativo('tecn')}
                    className={menu_ativo == 'tecn' ? 'item active' : 'item'}
                >
                    <FaDev></FaDev>
                    <p>Tecnologias</p>
                </div>
                <div
                    onClick={() => MudaMenu_ativo('cont')}
                    className={menu_ativo == 'cont' ? 'item active' : 'item'}
                >
                    <FaRegEnvelope></FaRegEnvelope>
                    <p>Contatos</p>
                </div>
                <div
                    onClick={() => MudaMenu_ativo('pagi')}
                    className={menu_ativo == 'pagi' ? 'item active' : 'item'}
                >
                    <FaEdit></FaEdit>
                    <p>Editor de Pág.</p>
                </div>
            </div>
        </div>
    );
}
