import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Dimensions } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import LoginButtons from './LoginButtons';
import LoginModal from './LoginModal';
import stylePresets from '../util/stylePresets';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      mode: null
    }

    this.store = this.props.store;
    this.handlePress = this.handlePress.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handlePress(mode) {
    this.setState({ mode }, this.toggleModal);
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Log In or Sign up</Text> */}
        <LoginButtons handlePress={this.handlePress} />
        <LoginModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          mode={this.state.mode}
          setCurrentUser={this.props.setCurrentUser}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - 100,

  },
  input: {
    height: 40,
  },
});

export default Login;
