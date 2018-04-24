import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title">Welcome to React</h2>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>Test prop: {this.props.myProps.testProp}</p>
                <p>My props: {this.props.myProps.myProp}</p>
            </div>
        );
    }
}

export default App;
