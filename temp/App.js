import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GetFile from './GetFile';
import styles from './elf-styles';
import { NativeRouter, Route } from 'react-router-native';
import ElfHeader from './ElfHeader';

class App extends React.Component {
    render() {
        return (
        <NativeRouter>
			<View style={styles.addressContainer}>
			    
				<GetFile />
			</View>
        </NativeRouter>
        );
    }
}



export default App;


