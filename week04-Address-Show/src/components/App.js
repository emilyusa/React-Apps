import React, { Component } from 'react';

import '../App.css';
import Header from './Header';
import GetFile from './GetFile';
import Address from './Address';

class App extends Component {

      render() {
        return (
            <div className="App">
                <Header/>
                <GetFile/>
                <Address/>
            </div>
        );
    }
}

export default App;
