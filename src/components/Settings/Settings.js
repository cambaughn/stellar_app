import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';


const Settings = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.profile_photo || 'Photo goes here'}</Text>
      <Link to={'/'} style={styles.optionLink}>
        <Text style={styles.text}>{user.name}</Text>
      </Link>
        <Text style={styles.text}>{user.email}</Text>
      <Text style={styles.text}>{user.bio || 'Bio goes here'}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    paddingTop: 100
  },

  // ------------------------ LINK

  optionLink: {

  },

  // ------------------------ TEXT

  text: {
    fontSize: 16,
  }
})

export default Settings;
