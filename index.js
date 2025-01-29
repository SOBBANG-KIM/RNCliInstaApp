/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from "react-native-push-notification";

AppRegistry.registerComponent(appName, () => App);

PushNotification.configure({
  onNotification: (notification) => {
    console.log('Platform.OS', Platform.OS)
    console.log('NOTIFICATION', notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});
