import React, { Component } from 'react';
import '../App.css';


class Address extends Component {

    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS',typeof props);
        const address=this.props.addressList[0];
        this.state = {
            firstName:address.firstName,
            lastName:address.lastName,
            street:address.street,
            city:address.city,
            somestate:address.somestate,
            postal:address.postal
        };
    }

    setAddress=()=>{
        const address=this.props.addressList[1];
        this.setState({
            firstName:address.firstName,
            lastName:address.lastName,
            street:address.street,
            city:address.city,
            somestate:address.somestate,
            postal:address.postal
        })
    };

    render() {
        return (
            <div className="App">
                <hr></hr>
                <p className="App-intro">firstName:{this.state.firstName}</p>
                <p className="App-intro">lastName:{this.state.lastName}</p>
                <p className="App-intro">Street:{this.state.street}</p>
                <p className="App-intro">City:{this.state.city}</p>
                <p className="App-intro">State:{this.state.somestate}</p>
                <p className="App-intro">Postal:{this.state.postal}</p>
                <button id="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default Address;
