import React, { Component } from 'react';

import Header from '../header';
import BannerPages from '../banner_pages';
//Imagens
import Feedbacks from '../feedback';
//Top of Mind
import NossosValores from './sub/nossos_valores';
import FormContato from '../form_fale_conosco';

import sobrenos_obj from '../../shared/sobre_nos.json';

import valores_obj from '../../shared/valores_model.json';
import feedbacks_obj from '../../shared/feedbacks_model.json';

export default class SobreNos extends Component {
    constructor(props) {
        super(props);

        this.textoBannerPages = sobrenos_obj.banner;
        this.textoNossosValores = sobrenos_obj.nossos_valores;
        this.textoFeedbacks = sobrenos_obj.feedbacks;
        this.textoForm = sobrenos_obj.faleconosco;

        this.dadosValores = valores_obj.valores;
        this.dadosFeedbacks = feedbacks_obj.feedbacks;
    }

    render() {
        return (
            <div className="sobre_nos_container">
                <Header></Header>
                <BannerPages textos={this.textoBannerPages}></BannerPages>
                {/* Imagens */}
                <Feedbacks
                    textos={this.textoFeedbacks}
                    dados={this.dadosFeedbacks}
                ></Feedbacks>
                {/* Top of Mind */}
                <NossosValores
                    textos={this.textoNossosValores}
                    dados={this.dadosValores}
                ></NossosValores>
                <FormContato textos={this.textoForm}></FormContato>
            </div>
        );
    }
}
