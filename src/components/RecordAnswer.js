import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link, Redirect } from 'react-router-native';

import Camera from 'react-native-camera';

import colors from '../util/colors';
import { postAnswer } from '../util/postAnswer';

class RecordAnswer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      visible: true,
      finishedRecording: false,
    }

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.exitModal = this.exitModal.bind(this);

    Camera.checkDeviceAuthorizationStatus().then(result => console.log('Authorized => ', result))
  }


  startRecording() {
    console.log('recording video')
    this.setState({ recording: true });
    this.camera.capture({
      totalSeconds: 2,
    })
    .then(video => {
      console.log('DONE RECORDING => ', video)
      postAnswer(video, () => console.log('YIPPEE'))
    })
    .catch(err => console.error(err));
  }

  stopRecording() {
    console.log('stopping video')
    this.setState({ recording: false, finishedRecording: true });
    this.camera.stopCapture();
  }

  exitModal() {
    console.log('exiting modal')
    this.setState({ visible: false });
  }


  render() {
    if (!this.state.visible) {
      return (<Redirect to='/' />)
    } else {
      return (
        <View>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.visible}
          >
            <View style={styles.container}>

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

              {/* Buttons and UI elements that aren't a part of the camera component */}
              <View style={styles.overlayContainer}>

                <View style={styles.exitWrapper}>
                  <TouchableHighlight
                    onPress={this.exitModal}
                    style={styles.exit}
                    underlayColor={'transparent'}
                  >
                    <Text style={styles.exitText}>X</Text>
                  </TouchableHighlight>
                </View>

                <View style={styles.questionWrapper}>
                  <View style={styles.question}>
                    <Text>Luke Skywalker asks:</Text>
                    <Text>But I was going to go to Tosche station to pick up some power converters!</Text>
                    {/* <Text style={styles.questionText}>State: {this.props.location.state.question.text}</Text> */}
                  </View>

                </View>
              </View>

              { this.state.finishedRecording &&
                <View style={styles.doneWrapper}>
                  <View style={styles.doneButton}>
                    <Text style={styles.doneText}>Send</Text>
                  </View>
                </View>
              }
            </View>
          </Modal>
        </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  container: {
    // paddingTop: 80,
    flex: 1,
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
    width: 65,
    height: 65,
    margin: 40
  },

  recording: {
    backgroundColor: 'red'
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
    width: 65,
    height: 65,
    margin: 40,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  doneText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
})

export default RecordAnswer;
