import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


import ProfileSettings from './ProfileSettings';
import colors from '../../util/design/colors';

class Settings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      saveButtonActive: false,
    }

    this.configureNavigator = this.configureNavigator.bind(this);
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);

    this.configureNavigator();
  }

  configureNavigator() {

    let saveButton = {
       title: 'Save',
       id: 'save',
       disabled: !this.state.saveButtonDisabled,
       buttonFontWeight: '600',
       buttonFontSize: 15,
     }

    let saveButtonActive = {
       buttonColor: colors.blue,
    }

    this.props.navigator.setButtons({
      rightButtons: [
        this.state.saveButtonActive ? {...saveButton, ...saveButtonActive} : saveButton
      ]
    })

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'save') {
        console.log('SAVING SETTINGS');
      }
    }
  }

  render() {
    return (
      <View>
        <ProfileSettings user={this.props.user} />
      </View>
    )
  }
}


export default Settings;
