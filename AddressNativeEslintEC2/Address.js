import React from 'react';
import { View } from 'react-native';
import styles from './elf-styles';
import AddressShow from './AddressShow';
import tempAddressList from './address-list';

export default class Address extends React.Component {
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
        fetch('http://18.188.225.33:30026/address-list')
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
            <View style={styles.container}>
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />
            </View>
        );
    }
}
