import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../util/colors';

const ProfilePhoto = ({ photo, style }) => {
  return (
    <View style={[styles.container, style]}>
      { photo ? (
        <View></View>
      ) : (
        <Icon name='user' style={styles.icon} />
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    width: 45,
    height: 45,

    borderRadius: 100,
    backgroundColor: colors.lightGrey,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    overflow: 'hidden',
  },

  // ------------------------ NO IMAGE

  icon: {
    fontSize: 25,
    color: 'white',
  },

})

export default ProfilePhoto;


// ------------------------ IMAGE
