import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import store from '../redux/store';
import { registerScreens } from '../util/navigation/screens';
import { iconsMap, iconsLoaded } from '../util/navigation/appIcons';
import colors from '../util/design/colors';


registerScreens(store, Provider);

const navigatorStyle = {
	navBarTextColor: colors.primary,
  navBarTextFontSize: 18,
  navBarBackgroundColor: 'white',
  navBarButtonColor: colors.midGrey,
};

const tabsStyle = {
  tabBarBackgroundColor: 'white',
  tabBarSelectedButtonColor: colors.blue,
}

class AppStart extends Component {
  constructor(props) {
    super(props);

    iconsLoaded.then(() => {
      this.startApp();
    });
  }


  startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				// {
				// 	screen: 'stellar.Home',
				// 	icon: iconsMap['home'],
				// 	// selectedIcon: iconsMap['ios-person'],
				// 	title: 'stellar',
        //   navigatorStyle
				// },
        {
          screen: 'stellar.Search',
          icon: iconsMap['search'],
          // selectedIcon: iconsMap['ios-person'],
          title: 'search',
          navigatorStyle
        },
        {
          screen: 'stellar.UserProfile',
          icon: iconsMap['user'],
          // selectedIcon: iconsMap['ios-person'],
          title: 'stellar',
          navigatorStyle
        },
			],
      portraitOnlyMode: true,
      tabsStyle
		});
	}
}


export default AppStart;
