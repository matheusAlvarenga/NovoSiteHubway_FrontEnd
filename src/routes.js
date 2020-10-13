import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/index';
import SobreNos from './pages/sobre_nos';
import FaleConosco from './pages/fale_conosco';
import Servicos from './pages/servicos';
import Servico from './pages/servicos_individual';
import Tecnologias from './pages/tecnologias';

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
            </Switch>
        </BrowserRouter>
    );
}
