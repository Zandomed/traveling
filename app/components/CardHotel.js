import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const CardHotel = props => {
  const { item } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        props.navigation.navigate('Detail', {
          title: item.name,
          uid: item.uid
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
  );
};
