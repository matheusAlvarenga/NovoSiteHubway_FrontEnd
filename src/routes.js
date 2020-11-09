import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './pages/index';
import SobreNos from './pages/sobre_nos';
import FaleConosco from './pages/fale_conosco';
import Servicos from './pages/servicos';
import Servico from './pages/servicos_individual';
import Tecnologias from './pages/tecnologias';
import Admin_Login from './pages/admin_login';
import Admin_Dashboard from './pages/admin_dashboard';

import Error from './pages/erro';

function Status({ code, children }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) staticContext.status = code;
                return children;
            }}
        />
    );
}

function NotFound() {
    return (
        <Status code={404}>
            <Error></Error>
        </Status>
    );
}

function RedirectWithStatus({ from, to, status }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) staticContext.status = status;
                return <Redirect from={from} to={to} />;
            }}
        />
    );
}

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/sobre-nos" component={SobreNos} />
                <Route path="/fale-conosco" component={FaleConosco} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/servico/:id/" component={Servico} />
                <Route path="/tecnologias" component={Tecnologias} />
                <Route path="/admin" exact component={Admin_Login} />
                <Route path="/admin/dashboard" component={Admin_Dashboard} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
