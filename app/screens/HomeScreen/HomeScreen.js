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
import { CardHotel } from '../../components/CardHotel';
import { style } from './HomeStyle';
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
  componentDidUpdate() {
    StatusBar.setBackgroundColor('transparent');
  }

  render() {
    // console.log(this.state);
    const { hotels } = this.state;

    if (hotels.length == 0) {
      return (
        <View style={style.flexCenter}>
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
              style={style.backgroundImage}>
              <View style={style.searchContainer}>
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
              style={{ marginHorizontal: 15, marginTop: 30, width: 'auto' }}
              horizontal
              ItemSeparatorComponent={() => (
                <View style={{ paddingHorizontal: 15 }}></View>
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <CardHotel item={item} {...this.props}></CardHotel>
              )}></FlatList>
          </View>
        </SafeAreaView>
      );
    }
  }
}
