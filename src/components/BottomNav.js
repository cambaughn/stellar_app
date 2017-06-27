import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import stylePresets from '../util/stylePresets';
import colors from '../util/colors';


const BottomNav = ({ currentUser }) => {
  return (
    <View style={styles.container}>
      <Link to='/' underlayColor='white' style={styles.button}>
        <Text>Home</Text>
      </Link>
      <Link to='/search' underlayColor='white' style={styles.button}>
        <Text>Search</Text>
      </Link>
      <Link to={`/user/${currentUser.id}`} underlayColor='white' style={styles.button}>
        <Text>Profile</Text>
      </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',

    position: 'absolute',
    bottom: 0,
    left: 0,

    borderTopWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    zIndex: 1,
  },

  button: {
    width: '33%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default BottomNav;
