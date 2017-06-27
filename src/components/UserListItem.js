import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';


const UserListItem = ({ user }) => {
  return (
    <View style={styles.container}>
      <Link to={`/user/${user.id}`} style={styles.link}>
        <Text style={styles.name}>{user.name}</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 30,

    // borderBottomWidth: 1,
    // borderColor: '#ecf0f1',
  },

  bold: {
    fontWeight: 'bold',
  },

  name: {
    fontWeight: '500',
    fontSize: 18,
  },

  link: {
  },
})

export default UserListItem;
