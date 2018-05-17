import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './elf-styles';
import AddressShow from './AddressShow';
import addresses from './address-list';

export default class Address extends React.Component {
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
				<View style={styles.container}>
					<AddressShow
						address={this.state.address}
						setAddress={this.setAddress}
					/>
				</View>
        );
    }
}

