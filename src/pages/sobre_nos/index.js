import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from '../header';
import HeaderMobile from '../header_mobile';

import BannerPages from '../banner_pages';

import Imagens from './sub/imagem';
import ImagensMobile from './sub/imagem_mobile';

import Feedback from '../feedback';
import FeedbackMobile from '../feedback_mobile';
import FeedbackSmall from '../feedback_small';

import TopOfMind from './sub/topofmind';

import NossosValores from './sub/nossos_valores';
import NossosValoresMobile from './sub/nossos_valores_mobile';
import NossosValoresSmall from './sub/nossos_valores_small';

import FormFaleConosco from '../form_fale_conosco';
import FormFaleConoscoMobile from '../form_fale_conosco_mobile';
import FormFaleConoscoTablet from '../form_fale_conosco_tablet';

import Footer from '../footer';
import FooterMobile from '../footer_mobile';

import sobrenos_obj from '../../shared/sobre_nos.json';

import valores_obj from '../../shared/valores_model.json';
import feedbacks_obj from '../../shared/feedbacks_model.json';

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

export default class SobreNos extends Component {
    constructor(props) {
        super(props);

        this.textoBannerPages = sobrenos_obj.banner;
        this.textoImagens = sobrenos_obj.bemvindo;
        this.textoNossosValores = sobrenos_obj.nossos_valores;
        this.textoFeedbacks = sobrenos_obj.feedbacks;
        this.textoForm = sobrenos_obj.faleconosco;

        this.dadosValores = valores_obj.valores;
        this.dadosFeedbacks = feedbacks_obj.feedbacks;
    }

    render() {
        return (
            <div className="sobre_nos_container">
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

                {/* IMAGENS */}

                <Mobile>
                    <ImagensMobile textos={this.textoImagens}></ImagensMobile>
                </Mobile>

                <MobileBig>
                    <ImagensMobile textos={this.textoImagens}></ImagensMobile>
                </MobileBig>

                <NoMobile>
                    <Imagens textos={this.textoImagens}></Imagens>
                </NoMobile>

                {/* FIM IMAGENS */}

                {/* FEEDBACKS */}

                <Mobile>
                    <FeedbackMobile
                        dados={this.dadosFeedbacks}
                        textos={this.textoFeedbacks}
                    ></FeedbackMobile>
                </Mobile>

                <MobileBig>
                    <FeedbackMobile
                        dados={this.dadosFeedbacks}
                        textos={this.textoFeedbacks}
                    ></FeedbackMobile>
                </MobileBig>

                <Tablet>
                    <FeedbackMobile
                        dados={this.dadosFeedbacks}
                        textos={this.textoFeedbacks}
                    ></FeedbackMobile>
                </Tablet>

                <DesktopSmall>
                    <FeedbackSmall
                        dados={this.dadosFeedbacks}
                        textos={this.textoFeedbacks}
                    ></FeedbackSmall>
                </DesktopSmall>

                <DesktopNormal>
                    <Feedback
                        dados={this.dadosFeedbacks}
                        textos={this.textoFeedbacks}
                    ></Feedback>
                </DesktopNormal>

                <DesktopBig>
                    <Feedback
                        dados={this.dadosFeedbacks}
                        textos={this.textoFeedbacks}
                    ></Feedback>
                </DesktopBig>

                {/* FIM FEEDBACKS */}

                {/* <TopOfMind></TopOfMind> */}

                {/* NOSSOS VALORES */}

                <Mobile>
                    <NossosValoresMobile
                        textos={this.textoNossosValores}
                        dados={this.dadosValores}
                    ></NossosValoresMobile>
                </Mobile>

                <MobileBig>
                    <NossosValoresMobile
                        textos={this.textoNossosValores}
                        dados={this.dadosValores}
                    ></NossosValoresMobile>
                </MobileBig>

                <Tablet>
                    <NossosValoresSmall
                        textos={this.textoNossosValores}
                        dados={this.dadosValores}
                    ></NossosValoresSmall>
                </Tablet>

                <DesktopSmall>
                    <NossosValoresSmall
                        textos={this.textoNossosValores}
                        dados={this.dadosValores}
                    ></NossosValoresSmall>
                </DesktopSmall>

                <DesktopNormal>
                    <NossosValores
                        textos={this.textoNossosValores}
                        dados={this.dadosValores}
                    ></NossosValores>
                </DesktopNormal>

                <DesktopBig>
                    <NossosValores
                        textos={this.textoNossosValores}
                        dados={this.dadosValores}
                    ></NossosValores>
                </DesktopBig>

                {/* FIM NOSSOS VALORES */}

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
