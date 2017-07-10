import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../util/colors';


const NavIcon = ({ selected, setSelected }) => {
  return (
    <TouchableHighlight
      onPress={() => setSelected('user') }
      style={styles.button}
    >
      <Icon name='user' style={[styles.icon, selected && styles.selected]} />
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%'
  },

  icon: {
    color: colors.midGrey,
    fontSize: 20,
  },

  selected: {
    color: colors.blue,
  },
})

export default NavIcon;
