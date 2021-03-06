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
import SobreNosMobile from './sub/sobre_nos_mobile';

import Contadores from './sub/contadores';
import ContadoresMobile from './sub/contadores_mobile';

import BannerFaleConosco from '../banner_fale_conosco';
import BannerFaleConoscoMobile from '../banner_fale_conosco_mobile';
import BannerFaleConoscoSmall from '../banner_fale_conosco_small';

import Tecnologias from './sub/tecnologias';
import TecnologiasMobile from './sub/tecnologias_mobile';
import TecnologiasTablet from './sub/tecnologias_tablet';
import TecnologiasDesktopSmall from './sub/tecnologias_desktop_small';

import Feedback from '../feedback';
import FeedbackMobile from '../feedback_mobile';
import FeedbackSmall from '../feedback_small';

import FormFaleConosco from '../form_fale_conosco';
import FormFaleConoscoMobile from '../form_fale_conosco_mobile';
import FormFaleConoscoTablet from '../form_fale_conosco_tablet';

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

                    {/* SOBRE NOS */}

                    <Mobile>
                        <SobreNosMobile
                            textos={this.textoSobreNos}
                        ></SobreNosMobile>
                    </Mobile>

                    <MobileBig>
                        <SobreNosMobile
                            textos={this.textoSobreNos}
                        ></SobreNosMobile>
                    </MobileBig>

                    <Tablet>
                        <SobreNosMobile
                            textos={this.textoSobreNos}
                        ></SobreNosMobile>
                    </Tablet>

                    <DesktopSmall>
                        <SobreNosMobile
                            textos={this.textoSobreNos}
                        ></SobreNosMobile>
                    </DesktopSmall>

                    <DesktopNormal>
                        <SobreNos textos={this.textoSobreNos}></SobreNos>
                    </DesktopNormal>

                    <DesktopBig>
                        <SobreNos textos={this.textoSobreNos}></SobreNos>
                    </DesktopBig>

                    {/* FIM SOBRE NOS */}

                    {/* CONTADORES */}

                    <Mobile>
                        <ContadoresMobile
                            dados={this.contadores}
                            textos={this.textoContadores}
                        ></ContadoresMobile>
                    </Mobile>

                    <MobileBig>
                        <ContadoresMobile
                            dados={this.contadores}
                            textos={this.textoContadores}
                        ></ContadoresMobile>
                    </MobileBig>

                    <Tablet>
                        <ContadoresMobile
                            dados={this.contadores}
                            textos={this.textoContadores}
                        ></ContadoresMobile>
                    </Tablet>

                    <DesktopSmall>
                        <Contadores
                            dados={this.contadores}
                            textos={this.textoContadores}
                        ></Contadores>
                    </DesktopSmall>

                    <DesktopNormal>
                        <Contadores
                            dados={this.contadores}
                            textos={this.textoContadores}
                        ></Contadores>
                    </DesktopNormal>

                    <DesktopBig>
                        <Contadores
                            dados={this.contadores}
                            textos={this.textoContadores}
                        ></Contadores>
                    </DesktopBig>

                    {/* FIM CONTADORES */}

                    {/* BANNER FALE CONOSCO */}

                    <Mobile>
                        <BannerFaleConoscoMobile
                            textos={this.textoBanner}
                        ></BannerFaleConoscoMobile>
                    </Mobile>

                    <MobileBig>
                        <BannerFaleConoscoMobile
                            textos={this.textoBanner}
                        ></BannerFaleConoscoMobile>
                    </MobileBig>

                    <Tablet>
                        <BannerFaleConoscoMobile
                            textos={this.textoBanner}
                        ></BannerFaleConoscoMobile>
                    </Tablet>

                    <DesktopSmall>
                        <BannerFaleConoscoSmall
                            textos={this.textoBanner}
                        ></BannerFaleConoscoSmall>
                    </DesktopSmall>

                    <DesktopNormal>
                        <BannerFaleConosco
                            textos={this.textoBanner}
                        ></BannerFaleConosco>
                    </DesktopNormal>

                    <DesktopBig>
                        <BannerFaleConosco
                            textos={this.textoBanner}
                        ></BannerFaleConosco>
                    </DesktopBig>

                    {/* FIM BANNER FALE CONOSCO */}

                    {/* TECNOLOGIAS */}

                    <Mobile>
                        <TecnologiasMobile
                            dados={this.tecnologias}
                            textos={this.textoTecnologias}
                        ></TecnologiasMobile>
                    </Mobile>

                    <MobileBig>
                        <TecnologiasTablet
                            dados={this.tecnologias}
                            textos={this.textoTecnologias}
                        ></TecnologiasTablet>
                    </MobileBig>

                    <Tablet>
                        <TecnologiasTablet
                            dados={this.tecnologias}
                            textos={this.textoTecnologias}
                        ></TecnologiasTablet>
                    </Tablet>

                    <DesktopSmall>
                        <TecnologiasDesktopSmall
                            dados={this.tecnologias}
                            textos={this.textoTecnologias}
                        ></TecnologiasDesktopSmall>
                    </DesktopSmall>

                    <DesktopNormal>
                        <Tecnologias
                            dados={this.tecnologias}
                            textos={this.textoTecnologias}
                        ></Tecnologias>
                    </DesktopNormal>

                    <DesktopBig>
                        <Tecnologias
                            dados={this.tecnologias}
                            textos={this.textoTecnologias}
                        ></Tecnologias>
                    </DesktopBig>

                    {/* FIM TECNOLOGIAS */}

                    {/* FEEDBACKS */}

                    <Mobile>
                        <FeedbackMobile
                            dados={this.feedbacks}
                            textos={this.textoFeedback}
                        ></FeedbackMobile>
                    </Mobile>

                    <MobileBig>
                        <FeedbackMobile
                            dados={this.feedbacks}
                            textos={this.textoFeedback}
                        ></FeedbackMobile>
                    </MobileBig>

                    <Tablet>
                        <FeedbackMobile
                            dados={this.feedbacks}
                            textos={this.textoFeedback}
                        ></FeedbackMobile>
                    </Tablet>

                    <DesktopSmall>
                        <FeedbackSmall
                            dados={this.feedbacks}
                            textos={this.textoFeedback}
                        ></FeedbackSmall>
                    </DesktopSmall>

                    <DesktopNormal>
                        <Feedback
                            dados={this.feedbacks}
                            textos={this.textoFeedback}
                        ></Feedback>
                    </DesktopNormal>

                    <DesktopBig>
                        <Feedback
                            dados={this.feedbacks}
                            textos={this.textoFeedback}
                        ></Feedback>
                    </DesktopBig>

                    {/* FIM FEEDBACKS */}

                    {/* FORMULÁRIO */}

                    <Mobile>
                        <FormFaleConoscoMobile
                            textos={this.textoFaleConosoc}
                        ></FormFaleConoscoMobile>
                    </Mobile>

                    <MobileBig>
                        <FormFaleConoscoMobile
                            textos={this.textoFaleConosoc}
                        ></FormFaleConoscoMobile>
                    </MobileBig>

                    <Tablet>
                        <FormFaleConoscoTablet
                            textos={this.textoFaleConosoc}
                        ></FormFaleConoscoTablet>
                    </Tablet>

                    <DesktopSmall>
                        <FormFaleConosco
                            textos={this.textoFaleConosoc}
                        ></FormFaleConosco>
                    </DesktopSmall>

                    <DesktopNormal>
                        <FormFaleConosco
                            textos={this.textoFaleConosoc}
                        ></FormFaleConosco>
                    </DesktopNormal>

                    <DesktopBig>
                        <FormFaleConosco
                            textos={this.textoFaleConosoc}
                        ></FormFaleConosco>
                    </DesktopBig>

                    {/* FIM FORMULÁRIO */}
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
