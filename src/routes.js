import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/index';
import SobreNos from './pages/sobre_nos';
import FaleConosco from './pages/fale_conosco';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/sobre-nos" component={SobreNos} />
                <Route path="/fale-conosco" component={FaleConosco} />
            </Switch>
        </BrowserRouter>
    );
}
