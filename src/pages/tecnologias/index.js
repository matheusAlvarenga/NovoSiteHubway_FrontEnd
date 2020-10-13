import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';

import './style.css';

import Header from '../header';
import HeaderMobile from '../header_mobile';

import BannerPages from '../banner_pages';

import ResumoServicos from './sub/resume';
import ResumoServicosMobile from './sub/resume_mobile';

import Footer from '../footer';
import FooterMobile from '../footer_mobile';

import tecnologias_obj from '../../shared/tecnologias.json';
import tecnologias_model_obj from '../../shared/tecnologias_model.json';

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

function mapServicos(dados) {
    return dados.map((ser, key) => {
        return <ResumoServicos dados={ser} chave={key}></ResumoServicos>;
    });
}

function mapServicosMobile(dados) {
    return dados.map((ser, key) => {
        return <ResumoServicosMobile dados={ser} chave={key}></ResumoServicosMobile>;
    });
}

export default class Servicos extends Component {
    constructor(props) {
        super(props);

        this.textoBannerPages = tecnologias_obj.banner;

        this.dadosServicos = tecnologias_model_obj.tecnologias;
    }

    render() {
        return (
            <div className="servicos-container">
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

                {/* Resumo Servico */}

                {/* SERVICOS */}

                    <Mobile>
                    {mapServicosMobile(this.dadosServicos)}
                    </Mobile>

                    <MobileBig>
                        {mapServicosMobile(this.dadosServicos)}
                    </MobileBig>

                    <Tablet>
                        {mapServicosMobile(this.dadosServicos)}
                    </Tablet>

                    <DesktopSmall>
                        {mapServicosMobile(this.dadosServicos)}
                    </DesktopSmall>

                    <DesktopNormal>
                        {mapServicos(this.dadosServicos)}
                    </DesktopNormal>

                    <DesktopBig>
                        {mapServicos(this.dadosServicos)}
                    </DesktopBig>

                    {/* FIM SERVICOS */}

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
