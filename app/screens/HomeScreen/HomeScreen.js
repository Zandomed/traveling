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
  TextInput,
  TouchableOpacity
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
  componentDidUpdate(){
    StatusBar.setBackgroundColor('transparent');

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

            {/* <Text>Hay Hoteles!</Text> */}
            <FlatList
              data={hotels}
              style={{ marginHorizontal: 15, width: 'auto' }}
              horizontal
              ItemSeparatorComponent={() => (
                <View style={{ paddingHorizontal: 15 }}></View>
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      title: item.name
                    })
                  }>
                  <ImageBackground
                    style={{
                      width: 200,
                      height: 300
                    }}
                    imageStyle={{
                      borderRadius: 20
                    }}
                    source={{
                      uri: item.cover
                    }}>
                    <View
                      style={{
                        position: 'relative',
                        backgroundColor: 'white',
                        width: 40,
                        height: 50,
                        top: 0,
                        left: 20,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 8
                      }}>
                      <Text style={{ color: '#BC5666' }}>{item.rating}</Text>
                      <Icon name="ios-star" size={15} color={'#BC5666'} />
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: 250,
                        padding: 20,
                        // bottom: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start'
                      }}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        {item.name}
                      </Text>
                      <Text style={{ color: '#EAEAEA' }}>{item.location}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
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
