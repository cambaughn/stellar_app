import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import stylePresets from '../util/stylePresets';
import colors from '../util/colors';


const TopNav = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>stellar</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',

    position: 'relative',

    paddingTop: 10,

    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 1,
  },

  brand: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  }
})

export default TopNav;
