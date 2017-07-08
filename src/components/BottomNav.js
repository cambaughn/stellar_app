import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import stylePresets from '../util/stylePresets';
import colors from '../util/colors';


const BottomNav = ({ currentUser, match, location }) => {

  let path = location.pathname;
  let isCurrentUserProfile = path.includes('user') && path.slice(6) == currentUser.id

  return (
    <View style={styles.container}>
      <Link to='/' underlayColor='white' style={styles.button}>
        <Icon name='home' style={[styles.icon, path.length === 1 && styles.selected]} />
      </Link>
      <Link to='/search' underlayColor='white' style={styles.button}>
        <Icon name='search' style={[styles.icon, path.includes('search') && styles.selected]} />
      </Link>
      <Link to={`/user/${currentUser.id}`} underlayColor='white' style={styles.button}>
        <Icon name='user' style={[styles.icon, isCurrentUserProfile && styles.selected]}/>
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
  },

  icon: {
    color: colors.midGrey,
    fontSize: 20,
  },

  selected: {
    color: colors.blue,
  },
})

export default BottomNav;
