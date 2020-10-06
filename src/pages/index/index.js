import React, { Component } from 'react';

import Header from '../header';
import HeaderMobile from '../header_mobile';
import AsideMenu from '../aside_menu';
import VideoPrincipal from './sub/video_principal';
import Servicos from './sub/servicos';
import SobreNos from './sub/sobre_nos';
import Contadores from './sub/contadores';
import BannerFaleConosco from '../banner_fale_conosco';
import Tecnologias from './sub/tecnologias';
import Feedback from '../feedback';
import FormFaleConosco from '../form_fale_conosco';
import Footer from '../footer';

import './style.css';

import servicos_obj from '../../shared/servicos_model.json';
import contadores_obj from '../../shared/contadores_model.json';
import tecnologias_obj from '../../shared/tecnologias_model.json';
import feedbacks_obj from '../../shared/feedbacks_model.json';
import index_obj from '../../shared/index.json';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.finalServicos = servicos_obj.servicos;
        this.textoServicos = index_obj.servicos;
        this.textoSobreNos = index_obj.sobre_nos;
        this.textoContadores = index_obj.contadores;
        this.textoBanner = index_obj.banner;
        this.textoTecnologias = index_obj.tecnologias;
        this.textoFeedback = index_obj.feedbacks;
        this.textoFaleConosoc = index_obj['fale-conosco'];
        this.contadores = contadores_obj.contadores;
        this.tecnologias = tecnologias_obj.tecnologias;
        this.feedbacks = feedbacks_obj.feedbacks;
    }

    render() {
        return (
            <div>
                {/* <Header></Header> */}
                {/* <HeaderMobile></HeaderMobile> */}
                <AsideMenu estado={true}></AsideMenu>
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
                    <BannerFaleConosco
                        textos={this.textoBanner}
                    ></BannerFaleConosco>
                    <Tecnologias
                        dados={this.tecnologias}
                        textos={this.textoTecnologias}
                    ></Tecnologias>
                    <Feedback
                        dados={this.feedbacks}
                        textos={this.textoFeedback}
                    ></Feedback>
                    <FormFaleConosco
                        textos={this.textoFaleConosoc}
                    ></FormFaleConosco>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
