/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { WelcomeScreen } from './screens/WelcomeScreen/WelcomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import TabBarButton from './components/TabBarButtom';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        {/* <Icon name="bookmark" color={'#586589'} size={24} /> */}
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    User: {
      screen: WelcomeScreen,
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
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-heart" color={tintColor} size={26} />
        )
      }
    },
    Notification: {
      screen: SettingsScreen,
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

const AppContainer = createAppContainer(TabNavigator);
const App = () => {
  return <AppContainer />;
};

export default App;
