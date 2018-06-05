import React, { Component } from 'react';

import { Header } from 'semantic-ui-react'
import ResultTable from './ResultTable';
import AppbarMenu from './AppbarMenu';

import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header style={{marginBottom:0}} as='h3' textAlign='left' block >
                    YINLCHEN
                </Header>
                <div className="container-fluid">
                    <div className="row">
                        <div style={{padding:0}} >		
                            <AppbarMenu />
                        </div>
                        <div className="col-lg-10 col-sm-auto">
                            <ResultTable />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
