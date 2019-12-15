import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getHotels } from '../../services/API';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      hotels: getHotels()
    });
  }

  render() {
    console.log(this.state);
    const { hotels } = this.state;

    if (hotels.length == 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No hay hoteles disponibles</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Hay Hoteles!</Text>
          <FlatList
            data={hotels}
            renderItem={({ item }) => <Text>{item.name}</Text>}></FlatList>

          {/* <Button
            onPress={() => {
              this.props.navigation.navigate('Detail');
            }}
            title={'Detail'}></Button>
          <Icon name="bookmark" color={'#586589'} size={24} /> */}
        </View>
      );
    }
  }
}
