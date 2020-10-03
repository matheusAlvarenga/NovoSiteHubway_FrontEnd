import React, { Component } from 'react';

import Header from '../header';
import VideoPrincipal from './sub/video_principal';
import Servicos from './sub/servicos';
import SobreNos from './sub/sobre_nos';
import Contadores from './sub/contadores';
import BannerFaleConosco from '../banner_fale_conosco';
import Tecnologias from './sub/tecnologias';
import Feedback from '../feedback';
import Footer from '../footer';

import './style.css';

import servicos_obj from '../../shared/servicos_model.json';
import contadores_obj from '../../shared/contadores_model.json';
import tecnologias_obj from '../../shared/tecnologias_model.json';
import index_obj from '../../shared/index.json';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.finalServicos = servicos_obj.servicos;
        this.textoServicos = index_obj.servicos;
        this.textoSobreNos = index_obj.sobre_nos;
        this.textoContadores = index_obj.contadores;
        this.textoTecnologias = index_obj.tecnologias;
        this.contadores = contadores_obj.contadores;
        this.tecnologias = tecnologias_obj.tecnologias;
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="index-container">
                    <VideoPrincipal></VideoPrincipal>
                    <Servicos
                        dados={this.finalServicos}
                        textos={this.textoServicos}
                    ></Servicos>
                    <SobreNos textos={this.textoSobreNos}></SobreNos>
                    <Contadores
                        dados={this.contadores}
                        textos={this.textoContadores}
                    ></Contadores>
                    <BannerFaleConosco></BannerFaleConosco>
                    <Tecnologias
                        dados={this.tecnologias}
                        textos={this.textoTecnologias}
                    ></Tecnologias>
                    <Feedback></Feedback>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
