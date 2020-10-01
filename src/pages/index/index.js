import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1>Teste 1 2 3 4 5 6</h1>
                <Footer></Footer>
            </div>
        );
    }
}
