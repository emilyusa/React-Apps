import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            file: 'unknown',
            firstName:'unknown',
            lastName:'unknown',
            street:'unknown',
            city:'unknown',
            somestate:'unknown',
            postal:'unknown'
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: '9'})
    };

    setAddress=()=>{
        this.setState({
            firstName:'Chunyan',
            lastName:'Li',
            street:'4185 129th',
            city:'Bellevue',
            somestate:'WA',
            postal:'98006'
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title">Welcome to React</h2>
                </header>
                <p className="App-intro">Nine:{this.state.file}</p>
                <p className="App-intro">firstName:{this.state.firstName}</p>
                <p className="App-intro">lastName:{this.state.lastName}</p>
                <p className="App-intro">Street:{this.state.street}</p>
                <p className="App-intro">City:{this.state.city}</p>
                <p className="App-intro">State:{this.state.somestate}</p>
                <p className="App-intro">Postal:{this.state.postal}</p>
                <button id='getFile' onClick={this.getFile}>Get Nine</button>
                <button id="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default App;
