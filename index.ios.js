// Ignore Remote Debugger warning
console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import store from './src/redux/store';
import { registerScreens } from './src/util/navigation/screens';
import App from './src/components/App';
import AppStart from './src/components/AppStart';

const app = new AppStart();



// ------------------------------- Starting in this file

// registerScreens(store, Provider);

// start the app
// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'Home',
//       screen: 'stellar.Home', // this is a registered name for a screen
//       // icon: require('../img/one.png'),
//       // selectedIcon: require('../img/one_selected.png'), // iOS only
//       title: 'Home'
//     },
//   ]
// });




// ------------------------------- Original way to start

// const stellar_app = () => {
//   return (
//     <App store={store} />
//   );
// }
//
//
// export default stellar_app;
// AppRegistry.registerComponent('stellar_app', () => stellar_app);
