import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';


const Example = () => {
  return (
    <View></View>
  )
}


const styles = StyleSheet.create({
  container: {

  },
})

export default Example;


// OR  -----------------------------------------

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
})


export default Example;




<key>NSCameraUsageDescription</key>
<string>stellar would like to use the camera</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string></string>
<key>NSMicrophoneUsageDescription</key>
<string>stellar needs to use the microphone for video recording</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>stellar would like to access your photos</string>
