
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Home questions={null} />
      </View>
    )
  }
}


export default HomeContainer;
