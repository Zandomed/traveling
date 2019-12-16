import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { getHotelByID } from '../../services/API';
import { Header } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/Ionicons';

export class HotelDetailScreen extends Component {
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
      numberLines: 7
    };
  }

  componentDidMount() {
    StatusBar.setBackgroundColor('#000');
    const _hotel = getHotelByID(this.props.navigation.getParam('uid'));
    console.log(_hotel);
    this.setState({
      hotel: _hotel
    });
  }
  render() {
    const { height } = Dimensions.get('window');
    let rating = [];
    let benefits = [];
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

      benefits = hotel.benefits.map((benefit, i) => {
        return (
          <View
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
              No hay Hotel con el ID {this.props.navigation.getParam('uid')}
            </Text>
          </View>
        )}

        {hotel && (
          <React.Fragment>
            <View
              style={{
                // position: 'relative',
                // top: -StatusBar.currentHeight,
                // padding: 10,
                height: '45%',
                // marginBottom: 10,
                margin: 0,
                zIndex: 1
              }}>
              <SliderBox
                images={this.state.hotel.images}
                autoplay={true}
                // paginationBoxVerticalPadding={20}

                circleLoop
                disableOnPress
                sliderBoxHeight={400}
              />
            </View>
            {/* Content */}
            <View
              style={{ display: 'flex', flexDirection: 'row', height: '55%' }}>
              {/* Content Info */}
              <View
                style={{
                  width: '80%',
                  height: '100%',
                  marginTop: 10,
                  paddingHorizontal: 15
                }}>
                <Text style={{ fontSize: 25 }}>{hotel.name}</Text>
                <Text style={{ color: '#9C9C9C' }}>{hotel.location}</Text>
                <View
                  style={{
                    marginVertical: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                  }}>
                  {rating}
                </View>
                <View>
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
                        style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#7B8B95' }}>
                          {this.state.isShowMore ? 'hide' : 'read more'}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                </View>
              </View>
              {/* Content Benefit */}
              <View
                style={{
                  backgroundColor: '#EFF5F6',
                  width: '20%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: 5,
                  paddingBottom: 100,
                  alignItems: 'center'
                }}>
                {benefits}
              </View>
            </View>
          </React.Fragment>
        )}
      </SafeAreaView>
    );
  }
}
