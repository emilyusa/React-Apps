import React from 'react';


class GetFile extends React.Component {

    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'});
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">file:{this.state.file}</p>
                <button id='getFile' onClick={this.getFile}>Get File</button>
               
            </div>
        );
    }
}

export default GetFile;
