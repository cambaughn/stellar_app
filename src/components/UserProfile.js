import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

import PendingQuestionList from './PendingQuestionList';
import UserProfileButtons from './UserProfileButtons';
import colors from '../util/colors';



const UserProfile = ({ user, questions, toggleModal, handleFollow, following, isCurrentUser }) => {
  if (isCurrentUser) {
    return (
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
          </View>

          <PendingQuestionList questions={questions} />
        </View>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.bio}>{user.bio}</Text>


            <UserProfileButtons
              toggleModal={toggleModal}
              handleFollow={handleFollow}
              following={following}
            />

          </View>

          <PendingQuestionList questions={questions} />
        </View>
      </ScrollView>
    )
  }
}

export default UserProfile;

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get("window").height - 109,
    width: '100%'
  },

  container: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  top: {
    width: Dimensions.get('window').width - 20,
    minHeight: 100,

    paddingTop: 20,
    paddingBottom: 20,

    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',
  },


  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  bio: {

  },


})
