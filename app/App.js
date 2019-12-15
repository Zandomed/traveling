/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarButton from './components/TabBarButtom';
import {
  HomeScreen,
  LikeScreen,
  NotificationScreen,
  UserScreen,
  HotelDetailScreen
} from './screens';

const TabNavigator = createBottomTabNavigator(
  {
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" color={tintColor} size={26} />
        )
      }
    },
    Maps: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-map" color={tintColor} size={26} />
        )
      }
    },
    Favorite: {
      screen: LikeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-heart" color={tintColor} size={26} />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications-outline" color={tintColor} size={26} />
        )
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarButtonComponent: props => (
        <TabBarButton routeName={navigation.state.routeName} {...props} />
      )
    }),
    initialRouteName: 'Maps',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#304042',
      inactiveTintColor: '#A0A3A8',
      style: {
        height: 85,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 0,
        borderTopWidth: 0,
        backgroundColor: '#F0F3F8' // TabBar background
      }
    }
  }
);

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      TABS: TabNavigator,
      Detail: HotelDetailScreen
    },
    {
      initialRouteName: 'TABS',
      headerMode: 'float',
      defaultNavigationOptions: {
        headerStyle: { color: '#000', elevation: 0 },
        headerTitle: 'Traveling'
      }
    }
  )
);
const App = () => {
  return <AppContainer />;
};

export default App;
