import React from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import './style.css';

import Header from '../header';
import HeaderMobile from '../header_mobile';

import Banner from '../banner_pages';

import ResumoUm from './sub/resumo_um';

import Footer from '../footer';
import FooterMobile from '../footer_mobile';

import servicos_obj from '../../shared/servicos_model.json';

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

export default function ServicoIndividual() {
    let { id } = useParams();

    let dadosServiço = servicos_obj.servicos[id];

    return (
        <div className="servico-individual-container">
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

            <Banner textos={dadosServiço.inpage.banner}></Banner>

            <ResumoUm textos={dadosServiço.inpage.resumo}></ResumoUm>

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
