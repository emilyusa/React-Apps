import React, { Component } from 'react';
import '../css/App.css';
import tempAddressList from '../address-list';
import AddressShow from './AddressShow';

class Address extends Component {

    constructor(props) {
        super(props);
        this.addressList = null;
        this.addressIndex = 0;
        this.state = {
            address: tempAddressList[this.addressIndex]
        };
        this.getAddress();
    }

    getAddress=()=> {
        fetch('/address-list')
            .then((response) => response.json())
            .then((addressListFromServer) => {
                this.addressList=addressListFromServer;
            })
            .catch((ex) => {
                console.log(ex);
            })
    }

    setAddress=(offset)=>{
        this.addressIndex += offset;
        if(this.addressIndex>this.addressList.result.length-1) {
            this.addressIndex = 0;
        }
        else if(this.addressIndex<0) {
            this.addressIndex = this.addressList.result.length - 1;
        }
        this.setState({
            address:this.addressList.result[this.addressIndex]
        });
    };

    render() {
        if (!this.quiet){console.log("ADDRESS RENDER");}
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