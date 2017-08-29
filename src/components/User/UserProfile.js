import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AnsweredQuestionList from '../Question/AnsweredQuestionList';
import MixedQuestionList from '../Question/MixedQuestionList';
import CustomTopNavOverlay from '../TopNav/CustomTopNavOverlay';

import ProfilePhoto from './ProfilePhoto';
import UserProfileButtons from './UserProfileButtons';

import colors from '../../util/design/colors';


const UserProfile = ({ user, questions, toggleModal, handleFollow, following, isCurrentUser, navToUser }) => {
  return (
    <View style={styles.container}>
      { isCurrentUser &&
        <CustomTopNavOverlay>
          <View style={styles.topBarWrapper}>
            <Icon name='cog' style={styles.settingsIcon} />
          </View>
        </CustomTopNavOverlay>
      }

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        <View style={styles.mainContentWrapper}>

          <View style={styles.top}>
            <ProfilePhoto />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
            <Text style={styles.bio}>{user.bio}</Text>

            { !isCurrentUser &&
              <UserProfileButtons
                toggleModal={toggleModal}
                handleFollow={handleFollow}
                following={following}
              />
            }

          </View>

          <MixedQuestionList questions={questions} navToUser={navToUser} />

        </View>
      </ScrollView>
    </View>
  )

}

export default UserProfile;

const styles = StyleSheet.create({
  // ------------------------ SCROLL VIEW

  scrollView: {
    height: Dimensions.get("window").height - 109,
    width: '100%',
  },

  mainContentWrapper: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  // ------------------------ CONTAINER

  container: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  // ------------------------ ICON

  topBarWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  settingsIcon: {
    fontSize: 20,
    color: colors.midGrey,
  },

  // ------------------------ TOP USER INFO
  top: {
    width: Dimensions.get('window').width - 20,
    minHeight: 100,

    paddingTop: 20,
    paddingBottom: 20,

    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',
  },


  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  username: {
    fontSize: 15,
    color: colors.darkGrey,
    marginBottom: 5,
  },

  bio: {

  },


})
