import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../util/colors';

const UserProfileButtons = ({ toggleModal, handleFollow, following }) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableHighlight
        style={[styles.button, styles.buttonPrimary]}
        underlayColor={colors.primary}
        onPress={toggleModal}
      >
        <Text style={styles.buttonPrimaryText}>Ask Question</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.button, styles.buttonSecondary]}
        underlayColor={'white'}
        onPress={handleFollow}
      >
        <Text style={styles.buttonText}>{following ? 'Following' : 'Follow'}</Text>
      </TouchableHighlight>
    </View>
  )
}


const styles = StyleSheet.create({

  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  button: {
    width: '40%',
    height: 30,

    marginTop: 20,

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

export default UserProfileButtons;
