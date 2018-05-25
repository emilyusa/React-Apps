import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from "./elf-styles";


export default class AddressShow extends React.Component {
    
    render() {
        return (
            <View className="App">
                <Text className="App-intro">firstName:{this.props.address.firstName}
                </Text>
                
                <Text className="App-intro">lastName:{this.props.address.lastName}
                </Text>
                
                <Text className="App-intro">Street:{this.props.address.street}
                </Text>
                
                <Text className="App-intro">City:{this.props.address.city}
                </Text>
                
                <Text className="App-intro">State:{this.props.address.state}
                </Text>
                
                <Text className="App-intro">Zip:{this.props.address.zip}
                </Text>

                <Text className="App-intro">Phone:{this.props.address.phone}
                </Text>

                <Text className="App-intro">Websit:{this.props.address.website}
                </Text>

                <Text className="App-intro">Email:{this.props.address.email}
                </Text>

                <Text className="App-intro">Contact:{this.props.address.contact}
                </Text>

                <Button
                    title="setAddressLast"
                    style={styles.button}
                    onPress={(event) => this.props.setAddress(-1, event)}>
                </Button>
                <Button
                    title="setAddressNext"
                    style={styles.button}
                    onPress={(event) => this.props.setAddress(1, event)}>
                </Button>

                              
          </View>
        );
    }
}

