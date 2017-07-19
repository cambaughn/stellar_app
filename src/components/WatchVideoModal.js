import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';
import Video from 'react-native-video';

import Icon from 'react-native-vector-icons/FontAwesome';
import { getVideoById } from '../util/getVideo';
import { baseUrl } from '../util/getPostMethods';

class WatchVideoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    let answerId = this.props.question.Answers[0].id;
    console.log(answerId);
    // getVideoById(answerId, this.receiveVideo);

    if (this.props.visible) {
      // Later to trigger fullscreen
      this.player.presentFullscreenPlayer()

      // To set video position in seconds (seek)
      this.player.seek(0)
    }
  }

  receiveVideo(response) {
    console.log('getting something! => ', response)
  }

  loadStart(data) {
    console.log('LOADING VIDEO', data)
  }

  videoError(error) {
    console.log('ERROR => ', error)
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
      >
        {this.props.visible &&
          <Video source={{uri: `${baseUrl}/answer/1`}}
            ref={(ref) => {
              this.player = ref
            }}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={false}
            resizeMode="cover"
            repeat={true}
            playInBackground={false}
            playWhenInactive={false}
            ignoreSilentSwitch={"ignore"}
            progressUpdateInterval={250.0}
            onLoadStart={this.loadStart}
            onError={this.videoError}
          />
        }



        {/* <View style={styles.exitWrapper}>
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
          </View>

        </View> */}

      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    backgroundColor: 'pink',
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
