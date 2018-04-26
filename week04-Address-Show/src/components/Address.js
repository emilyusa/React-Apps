import React, { Component } from 'react';
import '../App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';

class Address extends Component {

    constructor(props) {
        super(props);

        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address
        };
        this.quiet = true;


    }



    render() {
        if (!this.quiet){console.log("ADDRESS RENDER");}
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }
}

export default Address;
