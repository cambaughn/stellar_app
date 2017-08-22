import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableHighlight,
  StatusBar,
  Animated
} from 'react-native';
import { Link } from 'react-router-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

import { getVideoById } from '../../util/getVideo';
import { baseUrl } from '../../util/getPostMethods';
import { postView } from '../../util/requestHelpers/view';

class WatchVideoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayOpacity: new Animated.Value(1),
      overlayVisible: true,
      viewed: false,
    }

    this.countView = this.countView.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.videoError = this.videoError.bind(this);
    this.toggleOverlayOpacity = this.toggleOverlayOpacity.bind(this);
  }

  countView() {
    this.setState({ viewed: true }, () => {
      postView(this.props.answer.id, console.log);
    })
  }

  handleProgress(e) {
    let { atValue, playableDuration, atTimescale } = e;
    let currentTime = atValue / atTimescale;

    if (!this.state.viewed && currentTime * 2 >= playableDuration) {
      this.countView();
    }

  }


  onEnd() {
    console.log('reached the end')
    setTimeout(() => {
      this.props.toggleModal();
      console.log(this)
    }, 1000);
  }

  videoError(error) {
    console.log('ERROR => ', error)
  }

  toggleOverlayOpacity() {
    console.log(this.state.overlayVisible);
    this.setState({ overlayVisible: !this.state.overlayVisible}, () => {
      Animated.timing(
        this.state.overlayOpacity,
        {
          toValue: this.state.overlayVisible ? 1 : 0,
          duration: 300,
        }
      ).start();
    })
  }


  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
      >
        <StatusBar hidden={this.props.visible} />

        { this.props.visible &&
          <Video source={{uri: `${baseUrl}/answer/${this.props.answer.path}`}}
            ref={(ref) => {
                this.player = ref
            }}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={false}
            resizeMode="cover"
            repeat={false}
            playInBackground={false}
            playWhenInactive={false}
            ignoreSilentSwitch={"ignore"}
            progressUpdateInterval={1000}

            // onLoad={this.countView}
            onProgress={this.handleProgress}
            onEnd={this.onEnd}
            onError={this.videoError}
            style={styles.videoPlayer}
          />
        }

        <TouchableHighlight
          underlayColor={'transparent'}
          style={styles.overlay}
          onPress={this.toggleOverlayOpacity}
        >
          <Animated.View style={[styles.overlay, {opacity: this.state.overlayOpacity}]}>

            <View style={styles.exitWrapper}>
              <TouchableHighlight
                onPress={this.props.toggleModal}
                style={styles.exit}
                underlayColor={'transparent'}
              >
                <Icon name='times' style={styles.exitText} />
              </TouchableHighlight>
            </View>

            { this.props.question &&
              <View style={styles.questionWrapper}>
                <View style={styles.question}>
                  <Text>{this.props.question.asker.name} asks:</Text>
                  <Text>{this.props.question.text}</Text>
                </View>

              </View>
            }
          </Animated.View>
        </TouchableHighlight>

      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },

  // ------------------------ VIDEO

  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    backgroundColor: 'black',
  },

  // ------------------------ OVERLAY

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  // ------------------------ EXIT BUTTON

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

  // ------------------------ QUESTION

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
    backgroundColor: 'rgba(255, 255, 255, 1)',

    padding: 15,
  },
})


export default WatchVideoModal;
