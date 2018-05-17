import React from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './elf-styles';

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
                <Text style={styles.welcome}>
                    Welcome to Expo Calvert!
                </Text>

                {/* Eventually we will link in AddressShow here, but not yet. */}
                {/* For now, just comment it out, using the syntax I have used here. */}
            </View>
        );
    }
}

