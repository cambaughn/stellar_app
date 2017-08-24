import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../../util/design/colors';

class CustomTopNavOverlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style && this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    width: Dimensions.get('window').width,
    height: 60,
    backgroundColor: 'transparent',

    position: 'absolute',
    top: -60,
    left: 0,

    zIndex: 1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,

    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },

  // ------------------------ TEXT
  text: {
    fontSize: 16,
    color: colors.blue,
  },

  grey: {
    fontSize: 16,
    color: colors.midGrey,
  },
})

export default CustomTopNavOverlay;
