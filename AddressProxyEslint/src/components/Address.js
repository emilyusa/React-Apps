import React, { Component } from 'react';
import './App.css';
import tempAddressList from '../address-list';
import AddressShow from './AddressShow';

class Address extends Component {
    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            addressList: null,
            addressIndex: 0,
            address: tempAddressList[0]
        };
    }

    componentDidMount() {
        this.getAddress();
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    getAddress = () => {
        fetch('/address-list')
            .then(response => response.json())
            .then(addressListFromServer => {
                if (!this.canceled) {
                    this.setState({ addressList: addressListFromServer });
                    this.setState({ index: 0 });
                }
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    setAddress = offset => {
        if (offset === 0) {
            const middlebutton = tempAddressList[1];
            this.setState({
                address: middlebutton
            });
        } else {
            var tempIndex = this.state.addressIndex;
            tempIndex += offset;
            if (tempIndex > 99) {
                tempIndex = 0;
            } else if (tempIndex < 0) {
                tempIndex = 99;
            }
            this.setState({
                addressIndex: tempIndex,
                address: this.state.addressList.result[tempIndex]
            });
        }
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
