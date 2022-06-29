/**
 * @format
 */

 import {AppRegistry, LogBox} from 'react-native';
 import Router from './src/router';
 import {name as appName} from './app.json';
 
 LogBox.ignoreLogs(['Setting a timer'])
 LogBox.ignoreAllLogs()
 
 AppRegistry.registerComponent(appName, () => Router);
 