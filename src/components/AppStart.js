import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { registerScreens } from '../util/navigation/screens';
import colors from '../util/design/colors';



registerScreens();

const navigatorStyle = {
	navBarTextColor: colors.primary,
  navBarTextFontSize: 18,
  navBarBackgroundColor: 'white',
};

const tabsStyle = {
  tabBarBackgroundColor: 'white',
  tabBarSelectedButtonColor: colors.blue,
}

class AppStart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userIcon: null,
    }

    Icon.getImageSource('user', 20, 'red').then((source) => {
      console.log(source);
      this.setState({ userIcon: source })
    });
    this.startApp();
  }

  startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Home',
					screen: 'stellar.Home',
					// icon: this.state.userIcon,
					// selectedIcon: iconsMap['ios-person'],
					title: 'stellar',
          navigatorStyle
				},
        {
          label: 'Search',
          screen: 'stellar.Search',
          // icon: iconsMap['ios-person'],
          // selectedIcon: iconsMap['ios-person'],
          title: 'stellar',
          navigatorStyle
        },
			],
      tabsStyle
		});
	}
}


export default AppStart;
