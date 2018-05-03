import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

    fetchAddress=()=>{
        console.log('fetchAddress in console.');
        this.setState({foo:'fetchAddress method called'});

    };

    fetchMicro=()=>{
        console.log('fetchMicro in console.');
        const that=this;

        const ip='ccalvert.com';
        fetch('http://' + ip + ':30027/you-rang')
            .then((response) => response.json())
            .then(function(result) {

                console.log(result);
                that.setState({
                    result:result.result

                });
            }).catch(function(ex) {
                that.setState({foo: 'qux error'});
        });

    };

    constructor(props) {
        super(props);
        this.state = {
            foo: 'expo try state',
            result:'unknown'
        };
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Prog 272 Chunyan!</Text>
        <Text>{this.state.foo}</Text>
        <Text>{this.state.result}</Text>
          <Button
              onPress={this.fetchAddress}
              title="Get Data"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
          <Button
              onPress={this.fetchMicro}
              title="Get Micro"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
