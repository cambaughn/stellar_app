import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from '../util/navigation/screens';

registerScreens();

class AppStart extends Component {
  constructor(props) {
    super(props);

    this.startApp();
  }

  startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Home',
					screen: 'stellar.Home',
					// icon: iconsMap['ios-person'],
					// selectedIcon: iconsMap['ios-person'],
					title: 'Stellar',
				}
			],
		});
	}
}


export default AppStart;
