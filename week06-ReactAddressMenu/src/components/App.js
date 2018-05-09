import React, { Component } from 'react';
import '../css/App.css';
import GetFile from './GetFile';
import Address from './Address';
import ElfHeader from './ElfHeader';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {

      render() {
        return (
         <BrowserRouter>
            <div className="App">
                <ElfHeader/>
                <Route exact path="/" component={Address}/>
                <Route path="/get-file" component={GetFile}/>
            </div>
         </BrowserRouter>
        );
    }
}

export default App;
