import React from 'react';
import { Text, View } from 'react-native';
import GetFile from './GetFile';
import styles from './elf-styles';
import { NativeRouter, Route } from 'react-router-native';
import ElfHeader from './ElfHeader';
import Address from './Address';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
		  <View style={styles.container}>
		  
		    <ElfHeader/>
			<Route exact path="/" component={Address} />
            <Route path="/get-file" component={GetFile} />
           
		  </View>
      </NativeRouter>
    );
  }
}
