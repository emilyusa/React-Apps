import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './elf-styles';
import AddressShow from './AddressShow';
import tempAddressList from './address-list';

export default class Address extends React.Component {

		constructor() {
			super();
			this.addressList=[{}];
			this.addressIndex=0;
			this.state = {
				address: tempAddressList[0]
			};
			this.getAddress();
		}


		getAddress=()=> {

			fetch('http://18.188.225.33:30026/address-list')
				.then((response) => response.json())
				.then((addressListFromServer) => {
					this.addressList=addressListFromServer;
				})
				.catch((ex) => {
					console.log(ex);
				});
			}



		setAddress=(offset)=> {
            if(offset==0){
                const middlebutton=tempAddressList[1];
                this.setState({
                    address:middlebutton
                });
            }else {
                this.addressIndex += offset;
                if (this.addressIndex > 99) {

                    this.addressIndex = 0;
                }
                else if (this.addressIndex < 0) {
                    this.addressIndex = 99;
                }
                this.setState({
                    address: this.addressList.result[this.addressIndex]
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

