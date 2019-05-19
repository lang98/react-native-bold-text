import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BoldText } from './src/BoldText';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <BoldText textStyle={styles.normalText} boldTextStyle={styles.boldText}>
          {'Welcome to my version of <b>Bold</b> Text!'}
        </BoldText>
        <Text>lol</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  normalText: {
    fontSize: 20,
    color: '#333333',
  },
  boldText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
