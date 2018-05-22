import React, { Component } from 'react';
import '../css/App.css';
import tempAddressList from '../address-list';
import AddressShow from './AddressShow';

class Address extends Component {


    constructor(props) {
        super(props);
        this.debug = false;
        this.addressIndex=0;
        this.addressList = null;
        this.state = {
            address: tempAddressList[this.addressIndex]
        };
        this.getAddress();
        
    }

    getAddress=()=> {

        fetch('/address-list')
            .then((response) => response.json())
            .then((addressFromServer) => {
                console.log(addressFromServer);
                this.addressList=addressFromServer;

            })
            .catch((ex) => {
                console.log(ex);
            })
    }


    setAddress=(offset)=>{
        this.addressIndex+=offset;
        
        console.log('click showAddrees button');
        this.setState({
            address:this.addressList[this.addressIndex]
        })
    };

    render() {
        if (!this.quiet){console.log("ADDRESS RENDER");}
        return (
            <div>
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.setAddress}
                />
            </div>

        );
    }
}

export default Address;
