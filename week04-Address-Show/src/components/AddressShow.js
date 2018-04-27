import React, { Component } from 'react';
import '../App.css';


class AddressShow extends Component {

    constructor(props) {
        super(props);
        this.quiet = false;
        this.log('SHOW ADDRESS CONSTRUCTOR',this.props.address);
    }

    log(message, message2='', message3=''){
        if (!this.quiet){
            const label = this.constructor.name + ': ';
            console.log(label,message,message2,message3);
        }

    }

    render() {
        this.log("SHOW ADDRESS RENDER");
        return (

            <div className="App">cd
                <p className="App-intro">firstName:{this.props.address.firstName}</p>
                <p className="App-intro">lastName:{this.props.address.lastName}</p>
                <p className="App-intro">Street:{this.props.address.street}</p>
                <p className="App-intro">City:{this.props.address.city}</p>
                <p className="App-intro">State:{this.props.address.somestate}</p>
                <p className="App-intro">Postal:{this.props.address.postal}</p>
                <button id="setAddress" onClick={this.props.onAddressChange}>Show Address</button>
            </div>
        );
    }
}

export default AddressShow;
