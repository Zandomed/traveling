import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class HomeScreen extends Component {
  render() {
    console.log(this.props);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}
          title={'Detail'}></Button>
        {/* <Icon name="bookmark" color={'#586589'} size={24} /> */}
      </View>
    );
  }
}
