import React, { Component } from 'react';

import Header from '../header';
import BannerPages from '../banner_pages';

import NossosValores from './sub/nossos_valores';

import sobrenos_obj from '../../shared/sobre_nos.json';

import valores_obj from '../../shared/valores_model.json';

export default class SobreNos extends Component {
    constructor(props) {
        super(props);

        this.textoBannerPages = sobrenos_obj.banner;
        this.textoNossosValores = sobrenos_obj.nossos_valores;

        this.dadosValores = valores_obj.valores;
    }

    render() {
        return (
            <div className="sobre_nos_container">
                <Header></Header>
                <BannerPages textos={this.textoBannerPages}></BannerPages>
                <NossosValores
                    textos={this.textoNossosValores}
                    dados={this.dadosValores}
                ></NossosValores>
            </div>
        );
    }
}
