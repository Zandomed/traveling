import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export class LikeScreen extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('#000');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hotels that I like!</Text>
        {/* <Icon name="bookmark" color={'#586589'} size={24} /> */}
      </View>
    );
  }
}
