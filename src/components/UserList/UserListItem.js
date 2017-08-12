import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../util/colors';

const UserListItem = ({ user }) => {
  return (
      <Link
        to={`/user/${user.id}`}
        underlayColor={colors.lightGrey}
      >
        <View style={styles.container}>
          <View style={styles.circle}>
            <Icon name='user' style={styles.icon} />
          </View>

          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
          </View>
        </View>
      </Link>
  )
}

const styles = StyleSheet.create({
  // ------------------------ CONTAINER
  container: {
    height: 70,

    paddingLeft: 25,
    paddingRight: 25,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // ------------------------ TEXT

  name: {
    fontWeight: '500',
    fontSize: 16,
  },

  username: {
    fontSize: 16,
    color: colors.midGrey,
  },

  // ------------------------ IMAGE

  circle: {
    width: 45,
    height: 45,

    marginRight: 15,

    borderRadius: 100,
    backgroundColor: colors.lightGrey,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 25,
    color: 'white',
  },

})

export default UserListItem;
