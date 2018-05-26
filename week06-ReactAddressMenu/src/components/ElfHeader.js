import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';
import '../css/menu.css';

class ElfHeader extends Component {
    render() {
        return (			
			  <div className="menu">
				  <ul>
					  <li><Link to="/">Address</Link></li>
					  <li><Link to="/get-file">Get File</Link></li>          
				  </ul>
                <Header />
			  </div>                
			
			
        );
    }
}


export default ElfHeader;
