import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link, Redirect } from 'react-router-native';

import Camera from 'react-native-camera';

import colors from '../util/colors';
import postAnswer from '../util/postAnswer';

class RecordAnswer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      visible: true,
    }

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.exitModal = this.exitModal.bind(this);

    Camera.checkDeviceAuthorizationStatus().then(result => console.log(result))
  }


  startRecording() {
    console.log('recording video')
    this.setState({ recording: true });
    this.camera.capture({
      totalSeconds: 2,
    })
    .then(video => {
      console.log('DONE RECORDING => ', video)
      // postAnswer(video, console.log)
    })
    .catch(err => console.error(err));
  }

  stopRecording() {
    console.log('stopping video')
    this.setState({ recording: false });
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
              <TouchableHighlight
                onPress={this.exitModal}
                style={styles.exit}
                underlayColor={'transparent'}
              >
                <Text style={styles.exitText}>X</Text>
              </TouchableHighlight>
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

              {/* <Text>{this.props.match.params.questionId}</Text> */}
              {/* <Text>State: {this.props.location.state.question.text}</Text> */}
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

  exit: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 20,
  },

  exitText: {
    color: 'white',
    fontSize: 30,
  }
})

export default RecordAnswer;
