import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import UserListItem from './UserListItem';


const UserList = ({ users }) => {
  return (
    <ScrollView style={styles.container}>
      { users.map(user => {
        return <UserListItem key={user.id} user={user} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: 'white',
  },
})

export default UserList;
