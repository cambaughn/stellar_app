import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../../util/colors';

const Settings = ({ user }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        {/* <Text style={styles.text}>{user.profile_photo || 'Photo goes here'}</Text> */}
        <Link to={'/'} style={styles.optionLink}>
          <Text style={styles.text}>{user.name}</Text>
        </Link>

        <Link to={'/'} style={styles.optionLink}>
          <Text style={styles.text}>{user.email}</Text>
        </Link>

        <Link to={'/'} style={styles.optionLink}>
          <Text style={styles.text}>{user.bio || 'Write your bio!'}</Text>
        </Link>

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
  },

  scrollView: {
    height: '100%',
  },

  // ------------------------ LINK

  optionLink: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,

    paddingLeft: 20,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  // ------------------------ TEXT

  text: {
    fontSize: 16,
  }
})

export default Settings;
