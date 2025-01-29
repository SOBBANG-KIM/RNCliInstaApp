/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

AppRegistry.registerComponent(appName, () => App);

PushNotification.configure({
  onNotification: (notification) => {
    console.log('NOTIFICATION', notification);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});
