import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';

import './style.css';

import Header from '../header';
import HeaderMobile from '../header_mobile';

import BannerPages from '../banner_pages';

import FormFaleConosco from '../form_fale_conosco';
import FormFaleConoscoMobile from '../form_fale_conosco_mobile';
import FormFaleConoscoTablet from '../form_fale_conosco_tablet';

import Contato from './sub/contatos';

import Footer from '../footer';
import FooterMobile from '../footer_mobile';

import fale_conosco_obj from '../../shared/fale_conosco.json';
import contatos_obj from '../../shared/contatos_model.json';

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 700 });
    return isMobile ? children : null;
};

const MobileBig = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 701, maxWidth: 799 });
    return isMobile ? children : null;
};

const NoMobile = ({ children }) => {
    const isNoMobile = useMediaQuery({ minWidth: 800 });
    return isNoMobile ? children : null;
};

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 800, maxWidth: 950 });
    return isTablet ? children : null;
};

const DesktopSmall = ({ children }) => {
    const isDesktopSmall = useMediaQuery({ minWidth: 951, maxWidth: 1220 });
    return isDesktopSmall ? children : null;
};

const DesktopNormal = ({ children }) => {
    const isDesktopNormal = useMediaQuery({ minWidth: 1221, maxWidth: 1500 });
    return isDesktopNormal ? children : null;
};

const DesktopBig = ({ children }) => {
    const isDesktopBig = useMediaQuery({ minWidth: 1501 });
    return isDesktopBig ? children : null;
};

export default class FaleConosco extends Component {
    constructor(props) {
        super(props);

        this.textoBannerPages = fale_conosco_obj.banner;
        this.textoForm = fale_conosco_obj.formulario;

        this.contatos = contatos_obj.contatos;
    }

    render() {
        return (
            <div className="fale-conosco-container">
                {/* HEADER */}

                <Mobile>
                    <HeaderMobile></HeaderMobile>
                </Mobile>

                <MobileBig>
                    <HeaderMobile></HeaderMobile>
                </MobileBig>

                <NoMobile>
                    <Header></Header>
                </NoMobile>

                {/* FIM HEADER */}

                <BannerPages textos={this.textoBannerPages}></BannerPages>

                {/* FORMULÁRIO */}

                <Mobile>
                    <FormFaleConoscoMobile
                        textos={this.textoForm}
                    ></FormFaleConoscoMobile>
                </Mobile>

                <MobileBig>
                    <FormFaleConoscoMobile
                        textos={this.textoForm}
                    ></FormFaleConoscoMobile>
                </MobileBig>

                <Tablet>
                    <FormFaleConoscoTablet
                        textos={this.textoForm}
                    ></FormFaleConoscoTablet>
                </Tablet>

                <DesktopSmall>
                    <FormFaleConosco textos={this.textoForm}></FormFaleConosco>
                </DesktopSmall>

                <DesktopNormal>
                    <FormFaleConosco textos={this.textoForm}></FormFaleConosco>
                </DesktopNormal>

                <DesktopBig>
                    <FormFaleConosco textos={this.textoForm}></FormFaleConosco>
                </DesktopBig>

                {/* FIM FORMULÁRIO */}

                {/* MAPA */}

                <Contato dados={this.contatos}></Contato>

                {/* FOOTER */}

                <Mobile>
                    <FooterMobile></FooterMobile>
                </Mobile>

                <MobileBig>
                    <FooterMobile></FooterMobile>
                </MobileBig>

                <NoMobile>
                    <Footer></Footer>
                </NoMobile>

                {/* FIM FOOTER */}
            </div>
        );
    }
}
