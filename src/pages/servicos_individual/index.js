import React from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import './style.css';

import Header from '../header';
import HeaderMobile from '../header_mobile';

import Banner from '../banner_pages';

import ResumoUm from './sub/resumo_um';
import ResumoUmSmall from './sub/resumo_um_small';
import ResumoUmMobile from './sub/resumo_um_mobile';

import Portifolio from './sub/portifolio';

import ResumoDois from './sub/resumo_dois';
import ResumoDoisSmall from './sub/resumo_dois_small';
import ResumoDoisMobile from './sub/resumo_dois_mobile';

import Foto from './sub/foto';

import Listagem from './sub/listagem';
import ListagemMobile from './sub/listagem_mobile';

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

            {/* RESUMO 1 */}

            <Mobile>
                <ResumoUmMobile
                    textos={dadosServiço.inpage.resumo}
                ></ResumoUmMobile>
            </Mobile>

            <MobileBig>
                <ResumoUmMobile
                    textos={dadosServiço.inpage.resumo}
                ></ResumoUmMobile>
            </MobileBig>

            <Tablet>
                <ResumoUmMobile
                    textos={dadosServiço.inpage.resumo}
                ></ResumoUmMobile>
            </Tablet>

            <DesktopSmall>
                <ResumoUmSmall
                    textos={dadosServiço.inpage.resumo}
                ></ResumoUmSmall>
            </DesktopSmall>

            <DesktopNormal>
                <ResumoUm textos={dadosServiço.inpage.resumo}></ResumoUm>
            </DesktopNormal>
            <DesktopBig>
                <ResumoUm textos={dadosServiço.inpage.resumo}></ResumoUm>
            </DesktopBig>

            {/* FIM RESUMO 1 */}

            {/* PORTIFOLIO */}

            <NoMobile>
                <Portifolio
                    textos={dadosServiço.inpage.portifolio}
                ></Portifolio>
            </NoMobile>

            {/* FIM PORTIFOLIO */}

            {/* LISTAGEM */}

            <Mobile>
                <ListagemMobile
                    dados={dadosServiço.inpage.listagem}
                ></ListagemMobile>
            </Mobile>

            <MobileBig>
                <ListagemMobile
                    dados={dadosServiço.inpage.listagem}
                ></ListagemMobile>
            </MobileBig>

            <NoMobile>
                <Listagem dados={dadosServiço.inpage.listagem}></Listagem>
            </NoMobile>

            {/* FIM LISTAGEM */}

            {/* RESUMO 2 */}

            <Mobile>
                <ResumoDoisMobile
                    textos={dadosServiço.inpage.resumo2}
                ></ResumoDoisMobile>
            </Mobile>

            <MobileBig>
                <ResumoDoisMobile
                    textos={dadosServiço.inpage.resumo2}
                ></ResumoDoisMobile>
            </MobileBig>

            <Tablet>
                <ResumoDoisMobile
                    textos={dadosServiço.inpage.resumo2}
                ></ResumoDoisMobile>
            </Tablet>

            <DesktopSmall>
                <ResumoDoisSmall
                    textos={dadosServiço.inpage.resumo2}
                ></ResumoDoisSmall>
            </DesktopSmall>

            <DesktopNormal>
                <ResumoDois textos={dadosServiço.inpage.resumo2}></ResumoDois>
            </DesktopNormal>
            <DesktopBig>
                <ResumoDois textos={dadosServiço.inpage.resumo2}></ResumoDois>
            </DesktopBig>

            {/* FIM RESUMO 2 */}

            <Foto dados={dadosServiço.inpage.foto}></Foto>

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
