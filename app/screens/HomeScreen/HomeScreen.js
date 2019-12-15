import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableNativeFeedback,
  ImageBackground,
  TextInput
} from 'react-native';
import { getHotels } from '../../services/API';
import Icon from 'react-native-vector-icons/Ionicons';
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      isLoading: false
    };
  }

  componentDidMount() {
    StatusBar.setBackgroundColor('transparent');

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
        <SafeAreaView
          style={{
            paddingTop: Platform.select({
              android: StatusBar.currentHeight,
              default: 22
            })
          }}>
          <View>
            {/* Header */}
            <ImageBackground
              source={require('../../assets/images/Banner.jpg')}
              style={{
                position: 'relative',
                top: -StatusBar.currentHeight,
                height: 300,
                marginBottom: 10,
                margin: 0,
                zIndex: 1
              }}>
              <View
                style={{
                  backgroundColor: 'white',

                  position: 'absolute',
                  // width: '100%',
                  height: 60,
                  elevation: 7,
                  zIndex: 2,
                  bottom: -30,
                  left: 30,
                  right: 30,
                  borderRadius: 20,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingVertical: 5,
                  paddingHorizontal: 30,
                  alignItems: 'center'
                }}>
                <Icon
                  name="ios-search"
                  style={{ marginRight: 20 }}
                  size={26}
                  color={'#cbcbcb'}
                />
                <TextInput
                  placeholder="Search Hotel"
                  style={{ fontSize: 18, width: '80%' }}
                  placeholderTextColor="#cbcbcb"></TextInput>
              </View>
            </ImageBackground>

            <Text>Hay Hoteles!</Text>
            <FlatList
              data={hotels}
              renderItem={({ item }) => (
                <TouchableNativeFeedback>
                  <View>
                    <Text>{item.name}</Text>
                    <Image
                      source={{
                        uri:
                          'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/38/26/38263980.jpeg'
                      }}
                      style={{ width: 200, height: 200 }}></Image>
                  </View>
                </TouchableNativeFeedback>
              )}></FlatList>

            {/* <Button
            onPress={() => {
              this.props.navigation.navigate('Detail');
            }}
            title={'Detail'}></Button>
          <Icon name="bookmark" color={'#586589'} size={24} /> */}
          </View>
        </SafeAreaView>
      );
    }
  }
}
