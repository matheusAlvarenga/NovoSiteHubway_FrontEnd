import React, { Component } from 'react';

import Header from '../header';
import VideoPrincipal from './sub/video_principal';
import Servicos from './sub/servicos';
import Footer from '../footer';

import './style.css';
export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="index-container">
                    <VideoPrincipal></VideoPrincipal>
                    <Servicos></Servicos>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
