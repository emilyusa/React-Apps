import React from 'react';
import { Text, View, Button } from 'react-native';

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
            <View style={styles.container}>
                <Text style={styles.container}>file:{this.state.file}</Text>
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
