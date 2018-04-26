import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title">Welcome to React</h2>
                </header>
                <p className="App-intro">file:{this.state.file}</p>
                <button id='getFile' onClick={this.getFile}>Get File</button>
            </div>
        );
    }
}

export default App;
