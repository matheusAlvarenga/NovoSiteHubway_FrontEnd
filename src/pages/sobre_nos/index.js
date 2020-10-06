import React, { Component } from 'react';

import Header from '../header';
import BannerPages from '../banner_pages';

import sobrenos_obj from '../../shared/sobre_nos.json';

export default class SobreNos extends Component {
    constructor(props) {
        super(props);

        this.textoBannerPages = sobrenos_obj.banner;
    }

    render() {
        return (
            <div className="sobre_nos_container">
                <Header></Header>
                <BannerPages textos={this.textoBannerPages}></BannerPages>
            </div>
        );
    }
}
