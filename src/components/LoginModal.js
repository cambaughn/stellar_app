import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Modal, TouchableHighlight, TextInput } from 'react-native';
import { Link } from 'react-router-native';

import { postQuestion } from '../util/postQuestion';
import colors from '../util/colors';
import { signup, login } from '../util/signInHelpers';

class LoginModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLoggedIn = this.handleLoggedIn.bind(this)
  }

  handleLoggedIn(user) {
    this.setState({ name: '', email: '', password: '' });
    this.props.toggleModal();
    this.props.setCurrentUser(user);
  }

  handleSubmit() {
    if (this.state.email.length > 3) {
      let user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }

      if (this.props.mode === 'Sign Up') {
        signup(user, this.handleLoggedIn);
      } else {
        login(user, this.handleLoggedIn);
      }
    }
  }

  render() {
      return (
        <View>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.props.visible}
          >
            <View style={styles.container}>
              <Text style={styles.header}>{this.props.mode}</Text>

              <View style={styles.inputsContainer}>
                { this.props.mode === 'Sign Up' &&

                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.input}
                      placeholder={`Name`}
                      placeholderTextColor={colors.midGrey}
                      autoFocus={true}
                      autoCorrect={false}
                      returnKeyType={'next'}

                      onChangeText={name => this.setState({ name })}
                      value={this.state.name}
                    />
                  </View>
                }

                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder={`Email`}
                    placeholderTextColor={colors.midGrey}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    autoCapitalize={'none'}
                    autoFocus={true}

                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder={`Password`}
                    placeholderTextColor={colors.midGrey}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    autoCapitalize={'none'}
                    secureTextEntry={true}

                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                </View>
              </View>

              <TouchableHighlight
                onPress={this.handleSubmit}
                style={styles.buttonPrimary}
                underlayColor={colors.primary}
              >
                <Text style={styles.buttonPrimaryText}>Ask</Text>
              </TouchableHighlight>

            </View>
          </Modal>

        </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',

    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },

  inputsContainer: {
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },

  input: {
    // backgroundColor: 'lightgreen',
    width: Dimensions.get("window").width - 100,
    minHeight: 30,
    maxHeight: 300,

    paddingLeft: 10,
    paddingRight: 10,

    fontSize: 20,
  },

  buttonPrimary: {
    backgroundColor: colors.primary,

    width: Dimensions.get("window").width - 100,
    height: 35,

    marginTop: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonPrimaryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
})

export default LoginModal;
