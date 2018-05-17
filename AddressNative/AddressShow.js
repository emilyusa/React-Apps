import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from "./elf-styles";


export default class AddressShow extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text className="App-intro">firstName:{this.props.address.firstName}
                </Text>
                
                <Text className="App-intro">lastName:{this.props.address.lastName}
                </Text>
                
                <Text className="App-intro">Street:{this.props.address.street}
                </Text>
                
                <Text className="App-intro">City:{this.props.address.city}
                </Text>
                
                <Text className="App-intro">State:{this.props.address.somestate}
                </Text>
                
                <Text className="App-intro">Postal:{this.props.address.postal}
                </Text>
                
                
				<View style={styles.buttonView}>
					<Button
						onPress={this.props.setAddress}
						title="Get Data"
						color="#841584"
						accessibilityLabel="Learn more about this purple button"
					/>
                </View>
                              
          </View>
        );
    }
}

