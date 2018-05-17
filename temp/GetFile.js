import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './elf-styles';

class GetFile extends React.Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    getFile = () => {
        this.setState({ file: 'url-file.js' });
    };

    render() {
        return (
            <View className="App">
                <Text className="App-intro">file:{this.state.file}</Text>
                <View style={styles.buttonView}>
					<Button
						onPress={this.getFile}
						title="Get Data"
						color="#841584"
						accessibilityLabel="Learn more about this purple button"
					/>
			   </View>
            </View>
        );
    }
}

export default GetFile;
