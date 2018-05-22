import React, { Component } from 'react';
import '../css/App.css';
import GetFile from './GetFile';
import Address from './Address';
import ElfHeader from './ElfHeader';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {

	  state = {
		response: ''
	  };

	  componentDidMount() {
		this.callApi()
		  .then(res => this.setState({ response: res.express }))
		  .catch(err => console.log(err));
	  }

	  callApi = async () => {
		const response = await fetch('/api/hello');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	  };

      render() {
        return (
         <BrowserRouter>
            <div className="App">
                <ElfHeader/>
                <Route exact path="/" component={Address}/>
                <Route path="/get-file" component={GetFile}/>
                <p className="App-intro">{this.state.response}</p>
            </div>
         </BrowserRouter>
        );
    }
}

export default App;
