import React, { Component } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
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
          <Image
            source={require('../../assets/images/Banner.jpg')}
            style={{ width: '100%', height: 200 }}></Image>

          <Text>Hay Hoteles!</Text>
          <FlatList
            data={hotels}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
                <Image
                  source={{
                    uri:
                      'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/38/26/38263980.jpeg'
                  }}
                  style={{ width: 200, height: 200 }}></Image>
              </View>
            )}></FlatList>

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
