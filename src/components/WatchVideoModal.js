import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class WatchVideoModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
      >
        <View style={styles.exitWrapper}>
          <TouchableHighlight
            onPress={this.props.toggleModal}
            style={styles.exit}
            underlayColor={'transparent'}
          >
            <Icon name='times' style={styles.exitText} />
          </TouchableHighlight>
        </View>

      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },

  exitWrapper: {
    width: Dimensions.get('window').width,
    paddingTop: 30,
    paddingLeft: 25,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  exit: {

  },

  exitText: {
    color: 'white',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
})


export default WatchVideoModal;
