// Ignore Remote Debugger warning
console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './src/redux/store';
import App from './src/components/App';



const stellar_app = () => {
  return (
    <App store={store} />
  );
}


export default stellar_app;
AppRegistry.registerComponent('stellar_app', () => stellar_app);
