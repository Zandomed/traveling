/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { load } from './app/services/API';

load();
AppRegistry.registerComponent(appName, () => App);
