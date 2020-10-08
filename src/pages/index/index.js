import React, { Component } from 'react';
import ScrollLock from 'react-scrolllock';
import { useMediaQuery } from 'react-responsive';

import Header from '../header';
import HeaderMobile from '../header_mobile';

import VideoPrincipal from './sub/video_principal';
import VideoPrincipalMobile from './sub/video_principal_mobile';

import Servicos from './sub/servicos';
import ServicosMobile from './sub/servicos_mobile';
import ServicosTablet from './sub/servicos_tablet';
import ServicosDesktopSmall from './sub/servicos_desktop_small';

import SobreNos from './sub/sobre_nos';

import Contadores from './sub/contadores';

import BannerFaleConosco from '../banner_fale_conosco';

import Tecnologias from './sub/tecnologias';

import Feedback from '../feedback';

import FormFaleConosco from '../form_fale_conosco';

import Footer from '../footer';
import FooterMobile from '../footer_mobile';

import './style.css';

import servicos_obj from '../../shared/servicos_model.json';
import contadores_obj from '../../shared/contadores_model.json';
import tecnologias_obj from '../../shared/tecnologias_model.json';
import feedbacks_obj from '../../shared/feedbacks_model.json';
import index_obj from '../../shared/index.json';

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
            <div id="outer">
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

                <div id="wrap" className="index-container">
                    {/* VIDEO PRINCIPAL */}

                    <Mobile>
                        <VideoPrincipalMobile></VideoPrincipalMobile>
                    </Mobile>

                    <MobileBig>
                        <VideoPrincipalMobile></VideoPrincipalMobile>
                    </MobileBig>

                    <NoMobile>
                        <VideoPrincipal></VideoPrincipal>
                    </NoMobile>

                    {/* FIM VIDEO PRINCIPAL */}

                    {/* SERVICOS */}

                    <Mobile>
                        <ServicosMobile
                            dados={this.finalServicos}
                            textos={this.textoServicos}
                        ></ServicosMobile>
                    </Mobile>

                    <MobileBig>
                        <ServicosTablet
                            dados={this.finalServicos}
                            textos={this.textoServicos}
                        ></ServicosTablet>
                    </MobileBig>

                    <Tablet>
                        <ServicosTablet
                            dados={this.finalServicos}
                            textos={this.textoServicos}
                        ></ServicosTablet>
                    </Tablet>

                    <DesktopSmall>
                        <ServicosDesktopSmall
                            dados={this.finalServicos}
                            textos={this.textoServicos}
                        ></ServicosDesktopSmall>
                    </DesktopSmall>

                    <DesktopNormal>
                        <Servicos
                            dados={this.finalServicos}
                            textos={this.textoServicos}
                        ></Servicos>
                    </DesktopNormal>

                    <DesktopBig>
                        <Servicos
                            dados={this.finalServicos}
                            textos={this.textoServicos}
                        ></Servicos>
                    </DesktopBig>

                    {/* FIM SERVICOS */}

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
