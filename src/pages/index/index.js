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
import index_obj from '../../shared/index.json';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.finalServicos = servicos_obj.servicos;
        this.textoServicos = index_obj.servicos;
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
                    <SobreNos></SobreNos>
                    <Contadores></Contadores>
                    <BannerFaleConosco></BannerFaleConosco>
                    <Tecnologias></Tecnologias>
                    <Feedback></Feedback>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
