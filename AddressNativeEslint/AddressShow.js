import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './elf-styles';
import PropTypes from 'prop-types';

export default class AddressShow extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>firstName:{this.props.address.firstName}</Text>

                <Text style={styles.addressContainer}>
                    lastName:{this.props.address.lastName}
                </Text>

                <Text style={styles.addressContainer}>
                    Street:{this.props.address.street}
                </Text>

                <Text style={styles.addressContainer}>
                    City:{this.props.address.city}
                </Text>

                <Text style={styles.addressContainer}>
                    State:{this.props.address.state}
                </Text>

                <Text style={styles.addressContainer}>
                    Zip:{this.props.address.zip}
                </Text>

                <Text style={styles.addressContainer}>
                    Phone:{this.props.address.phone}
                </Text>

                <Text style={styles.addressContainer}>
                    Websit:{this.props.address.website}
                </Text>

                <Text style={styles.addressContainer}>
                    Email:{this.props.address.email}
                </Text>

                <Text style={styles.addressContainer}>
                    Contact:{this.props.address.contact}
                </Text>
                <View style={styles.buttonView}>
                    <Button
                        id="Backward"
                        title="Backward"
                        onPress={event => this.props.setAddress(-1, event)}
                    />
                    <Button
                        id="setAddress"
                        title="setAddress"
                        onPress={event => this.props.setAddress(0, event)}
                    />
                    <Button
                        id="Forward"
                        title="Forward"
                        onPress={event => this.props.setAddress(1, event)}
                    />
                </View>
            </View>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string,
        email: PropTypes.string,
        contact: PropTypes.string
    }),
    setAddress: PropTypes.func
};
