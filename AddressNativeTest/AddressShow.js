import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from "./elf-styles";


export default class AddressShow extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text >firstName:{this.props.address.firstName}
                </Text>
                
                <Text style={styles.addressContainer}>lastName:{this.props.address.lastName}
                </Text>
                
                <Text style={styles.addressContainer}>Street:{this.props.address.street}
                </Text>
                
                <Text style={styles.addressContainer}>City:{this.props.address.city}
                </Text>
                
                <Text style={styles.addressContainer}>State:{this.props.address.state}
                </Text>
                
                <Text style={styles.addressContainer}>Zip:{this.props.address.zip}
                </Text>

                <Text style={styles.addressContainer}>Phone:{this.props.address.phone}
                </Text>

                <Text style={styles.addressContainer}>Websit:{this.props.address.website}
                </Text>

                <Text style={styles.addressContainer}>Email:{this.props.address.email}
                </Text>

                <Text style={styles.addressContainer}>Contact:{this.props.address.contact}
                </Text>
                <View style={styles.buttonView}>
                <Button
                    id="Backward"
                    title="Backward"
                    onPress={(event) => this.props.setAddress(-1, event)}>
                </Button>
                <Button
                    id="setAddress"
                    title="setAddress"
                    onPress={(event) => this.props.setAddress(0, event)}>
                </Button>
                <Button
                    id="Forward"
                    title="Forward"
                    onPress={(event) => this.props.setAddress(1, event)}>
                </Button>
                </View>
                              
          </View>
        );
    }
}

