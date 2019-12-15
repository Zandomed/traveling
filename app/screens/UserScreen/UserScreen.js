import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class UserScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User!</Text>
        {/* <Icon name="bookmark" color={'#586589'} size={24} /> */}
      </View>
    );
  }
}
