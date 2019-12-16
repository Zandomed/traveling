import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export class NotificationScreen extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('#000');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You have no new notifications!</Text>
        {/* <Icon name="bookmark" color={'#586589'} size={24} /> */}
      </View>
    );
  }
}
