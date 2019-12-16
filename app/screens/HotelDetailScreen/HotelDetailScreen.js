import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { getHotelByID } from '../../services/API';
import { Header } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { style } from './HotelDetailStyle';

export class HotelDetailScreen extends Component {
  /* Confuration of navigator */
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <Header {...props}></Header>,
      // headerTitle: title ? title : 'Detalle',
      headerTitleStyle: {
        color: '#000'
      },
      headerTransparent: true,
      headerStyle: {
        marginTop: StatusBar.currentHeight,
        zIndex: 3,
        position: 'absolute',
        top: 0
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      hotel: null,
      isShowMore: false,
      showMoreButton: false,
      numberLines: 10,
      isLike: false
    };
  }

  componentDidMount() {
    StatusBar.setBackgroundColor('#000');
    const _hotel = getHotelByID(this.props.navigation.getParam('uid'));
    // console.log(_hotel);
    this.setState({
      hotel: _hotel
    });
  }

  render() {
    /* Variable */
    const { height } = Dimensions.get('window');
    let rating = [];
    let benefits = [];
    /* Get Rating  */
    const { hotel } = this.state;
    if (hotel) {
      for (let i = 0; i < hotel.rating; i++) {
        rating.push(
          <Icon
            key={i}
            style={{ marginHorizontal: 3 }}
            name="ios-star"
            size={20}
            color={'#BC5666'}
          />
        );
      }
      /* Get Benefits */
      benefits = hotel.benefits.map((benefit, i) => {
        return (
          <View key={i} style={style.flexCenter}>
            <Icon
              style={{ marginHorizontal: 3 }}
              name={benefit.icon}
              size={24}
              color={'#B3B8BC'}
            />
            <Text style={{ color: '#B3B8BC' }}>{benefit.name}</Text>
          </View>
        );
      });
    }

    return (
      <SafeAreaView
        style={{
          paddingTop: Platform.select({
            android: StatusBar.currentHeight,
            default: 22
          }),
          height: '100%'
        }}>
        {!hotel && (
          <View style={style.flexCenter}>
            <Text>
              No hay Hotel con el ID {this.props.navigation.getParam('uid')}
            </Text>
          </View>
        )}

        {hotel && (
          <React.Fragment>
            <View style={style.containerSlider}>
              <SliderBox
                images={this.state.hotel.images}
                autoplay={true}
                circleLoop
                disableOnPress
                sliderBoxHeight={400}
              />
            </View>
            {/* Content */}
            <View
              style={{ display: 'flex', flexDirection: 'row', height: '55%' }}>
              {/* Content Info */}
              <View style={style.containerDetail}>
                <Text style={{ fontSize: 25 }}>{hotel.name}</Text>
                <Text style={{ color: '#9C9C9C' }}>{hotel.location}</Text>
                <View style={style.containerRaiting}>{rating}</View>
                <View>
                  <ScrollView style={{ height: '60%' }}>
                    <Text
                      numberOfLines={this.state.numberLines}
                      onTextLayout={({ nativeEvent: { lines } }) => {
                        this.setState({
                          showMoreButton: lines.length > this.state.numberLines
                        });
                      }}>
                      {hotel.description}
                    </Text>

                    {this.state.showMoreButton && (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          this.setState({
                            isShowMore: !this.state.isShowMore,
                            numberLines: this.state.isShowMore ? 7 : 0
                          });
                        }}>
                        <View
                          style={{
                            paddingHorizontal: 20,
                            paddingVertical: 10
                          }}>
                          <Text
                            style={{ fontWeight: 'bold', color: '#7B8B95' }}>
                            {this.state.isShowMore ? 'hide' : 'read more'}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )}
                  </ScrollView>
                </View>
              </View>
              {/* Content Benefit */}
              <View style={style.containerBenefits}>{benefits}</View>
            </View>
            <View style={style.like}>
              <Icon
                onPress={() => {
                  this.setState({
                    isLike: !this.state.isLike
                  });
                }}
                name="md-heart"
                size={35}
                color={this.state.isLike ? 'red' : '#B3B8BC'}
              />
            </View>
          </React.Fragment>
        )}
      </SafeAreaView>
    );
  }
}
