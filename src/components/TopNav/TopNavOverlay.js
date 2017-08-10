import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../../util/colors';

const TopNavOverlay = ({ leftText, rightText, leftOnPress, rightOnPress, show }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={leftOnPress}
      >
        {leftText}
      </Text>
      <Text
        style={[styles.text, !show && styles.grey] }
        onPress={show ? rightOnPress : () => console.log('Can\'t submit.')}
      >
        {rightText}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    width: Dimensions.get('window').width,
    height: 60,
    // backgroundColor: 'pink',

    position: 'absolute',
    top: -60,
    left: 0,

    zIndex: 1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
  },

  // ------------------------ CONTAINER
  text: {
    fontSize: 16,
    color: colors.blue,
  },

  grey: {
    fontSize: 16,
    color: colors.midGrey,
  },
})

export default TopNavOverlay;
