import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { TouchablePreview } from 'react-native-navigation/lib/dist/adapters/TouchablePreview';

// const iconMap = {
//   User: 'md-person',
//   Maps: 'md-map',
//   Favorite: 'md-heart',
//   Notification: 'md-notifications-outline'
// };

export default function TabBarButton({ routeName, onPress, children }) {
  // console.log(onPress)
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {children}
        {/* <Icon name={iconMap[routeName]} size={26} color={'#A0A3A8'} /> */}
      </View>
    </TouchableNativeFeedback>
  );
}
