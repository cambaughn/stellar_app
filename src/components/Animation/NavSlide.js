
import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

class NavSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {

      marginLeft: new Animated.Value(Dimensions.get('window').width),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.marginLeft,
      {
        toValue: 0,
        duration: 300,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={[styles.container, {marginLeft: this.state.marginLeft}]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    position: 'relative',
  },
})


export default NavSlide;
