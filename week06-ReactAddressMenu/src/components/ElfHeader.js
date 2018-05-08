import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';

class ElfHeader extends Component {
    render() {
        return (			
			  <div className="App">
			      <Header />
				  <ul>
					  <li><Link to="/">Address</Link></li>
					  <li><Link to="/get-file">Get File</Link></li>          
				  </ul>
				  
			  </div>                
			
			
        );
    }
}


export default ElfHeader;
