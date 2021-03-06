import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import colors from '../../util/design/colors';


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

    paddingTop: 15,

    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  brand: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  }
})

export default TopNav;
