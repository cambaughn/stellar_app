import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import Video from 'react-native-video';

import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../util/colors';
import { postAnswer } from '../util/postAnswer';

class RecordAnswer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      finishedRecording: false,
      video: null,
    }

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.sendVideo = this.sendVideo.bind(this);

    Camera.checkDeviceAuthorizationStatus().then(result => console.log('Authorized => ', result))
  }


  startRecording() {
    this.setState({ recording: true });
    this.camera.capture({
      totalSeconds: 60,
    })
    .then(video => {
      this.setState({ video });
    })
    .catch(err => console.error(err));
  }

  stopRecording() {
    this.camera.stopCapture();
    this.setState({ recording: false, finishedRecording: true });
  }

  sendVideo() {
    postAnswer(this.state.video, response => console.log(response.message));
    // this.props.toggleModal();
  }


  loadStart(data) {
    console.log('LOADING VIDEO', data);
  }



  onEnd() {
    console.log('reached the end')
  }

  videoError(error) {
    console.log('ERROR => ', error)
  }


  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={true}
        >
          <View style={styles.container}>

            { !this.state.finishedRecording &&
              <Camera
                ref={(cam) => {
                  this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}
                captureMode={Camera.constants.CaptureMode.video}
                captureAudio={true}
                type={Camera.constants.Type.front}
                orientation={Camera.constants.Orientation.portrait}
                captureTarget={Camera.constants.CaptureTarget.temp}
              >
                <TouchableHighlight
                  onPressIn={this.startRecording}
                  onPressOut={this.stopRecording}
                  underlayColor={colors.lightGrey}
                  style={[styles.capture, this.state.recording && styles.recording]}
                >
                  <View></View>
                </TouchableHighlight>
              </Camera>

            }

            { this.state.video &&
              <Video source={{uri: this.state.video.path}}
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
                onEnd={this.onEnd}
                onError={this.videoError}
                style={styles.backgroundVideo}
              />
            }

            {/* Buttons and UI elements that aren't a part of the camera component */}
            <View style={styles.overlayContainer}>

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
                  <Text>{this.props.question.asker.name} asks:</Text>
                  <Text>{this.props.question.text}</Text>
                </View>

              </View>
            </View>

            { this.state.finishedRecording &&
              <View style={styles.doneWrapper}>
                <TouchableHighlight
                  style={styles.doneButton}
                  onPress={this.sendVideo}
                  underlayColor={colors.blue}
                >
                  <Icon name='paper-plane' style={styles.doneText} />
                </TouchableHighlight>
                </View>
            }
          </View>
        </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    // paddingTop: 80,
    flex: 1,
    backgroundColor: 'black',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  capture: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 100,
    width: 70,
    height: 70,
    margin: 40,

    borderWidth: 1,
    borderColor: colors.midGrey,
  },

  recording: {
    backgroundColor: 'red'
  },

  // Video Review

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    backgroundColor: 'black',
  },

  // Overlay

  overlayContainer: {
    width: '100%',
    height: Dimensions.get('window').height - 110,
    position: 'absolute',
    // backgroundColor: 'pink',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
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

    paddingBottom: 10,
  },

  question: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: 'white',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',

    padding: 15,
  },

  questionText: {
    color: 'black',
  },

  // Done button

  doneWrapper: {

    position: 'absolute',
    bottom: 0,
    left: 0,

    width: Dimensions.get('window').width,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  doneButton: {
    backgroundColor: colors.blue,

    borderRadius: 100,
    width: 70,
    height: 70,
    margin: 40,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  doneText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
})

export default RecordAnswer;
