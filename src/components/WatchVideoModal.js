import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class WatchVideoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
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

        <View style={styles.questionWrapper}>
          <View style={styles.question}>
            <Text>Luke Skywalker asks:</Text>
            <Text>But I was going to go to Tosche station to pick up some power converters!</Text>
            {/* <Text style={styles.questionText}>State: {this.props.location.state.question.text}</Text> */}
          </View>

        </View>

      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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

  questionWrapper: {
    width: Dimensions.get('window').width,
    // backgroundColor: 'lightgreen',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    position: 'absolute',
    bottom: 10,
    left: 0
  },

  question: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: 'white',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',

    padding: 15,
  },
})


export default WatchVideoModal;
