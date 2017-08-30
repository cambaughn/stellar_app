import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ProfileSettings from './ProfileSettings';

const Settings = ({ user }) => {
  return (
    <View>
      <ProfileSettings user={user} />
    </View>
  )
}


export default Settings;
