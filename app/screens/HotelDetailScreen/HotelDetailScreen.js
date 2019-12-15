import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export class HotelDetailScreen extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('transparent');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail!</Text>
        {/* <Icon name="bookmark" color={'#586589'} size={24} /> */}
      </View>
    );
  }
}
