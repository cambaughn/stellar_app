import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import ProfileSettings from './ProfileSettings';

const Settings = ({ user }) => {
  return (
    <View style={styles.container}>
      <ProfileSettings user={user} />
    </View>
  )
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
  },

})

export default Settings;
