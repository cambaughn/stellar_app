import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../util/colors';

const LoginButtons = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button, styles.buttonPrimary]}
        underlayColor={colors.primary}
        onPress={() => handlePress('Sign Up')}
      >
        <Text style={styles.buttonPrimaryText}>Sign Up</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.button, styles.buttonSecondary]}
        underlayColor={'white'}
        onPress={() => handlePress('Log In')}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableHighlight>
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
  },

  button: {
    width: '80%',
    height: 40,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  buttonPrimary: {
    backgroundColor: colors.primary,
  },

  buttonSecondary: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.midGrey,
  },

  buttonPrimaryText: {
    color: 'white',
  },

  buttonText: {

  },
})

export default LoginButtons;
