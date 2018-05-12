import React, { Component } from 'react';
import '../css/App.css';
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

    setAddress = () => {
        this.addressIndex = 1;
        const address = addresses[this.addressIndex];
        this.setState({
            address: address
        });
    };

    render() {
        return (
            <div>
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />
            </div>
        );
    }
}

export default Address;
