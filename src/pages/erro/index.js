import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './style.css';

import Header from '../header';
import HeaderMobile from '../header_mobile';

import Textos from './subs/textos';
import TextosMobile from './subs/textos_mobile';

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

export default function Error() {
    return (
        <div className="error_container">
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

            {/* HEADER */}

            <Mobile>
                <TextosMobile></TextosMobile>
            </Mobile>

            <MobileBig>
                <TextosMobile></TextosMobile>
            </MobileBig>

            <NoMobile>
                <Textos></Textos>
            </NoMobile>

            {/* FIM HEADER */}
        </div>
    );
}
