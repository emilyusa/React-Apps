import React, { Component } from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';

class AddressShow extends Component {

    log(message, message2='', message3=''){
        if (!this.quiet){
            const label = this.constructor.name + ': ';
            console.log(label,message,message2,message3);
        }

    }

    render() {
        this.log('SHOW ADDRESS RENDER');
        return (

            <div className="App">
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

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        street:PropTypes.string,
        city:PropTypes.string,
        somestate:PropTypes.string,
        postal:PropTypes.string
    }),
    setAddress: PropTypes.func
};

export default AddressShow;
