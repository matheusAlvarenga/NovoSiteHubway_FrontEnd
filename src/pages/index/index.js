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
                <h1>Hello World</h1>
                <Footer></Footer>
            </div>
        );
    }
}
