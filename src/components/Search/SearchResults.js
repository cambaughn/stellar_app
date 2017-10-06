import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

import UserList from '../UserList/UserList';
import colors from '../../util/design/colors';

const SearchResults = ({ results, navToUser }) => {
  return (
    <View style={styles.container}>
      { !results.length > 0 &&
        <View style={styles.searchMessageWrapper}>
          <Text style={styles.searchMessage}>Search for friends to follow</Text>
        </View>
      }
      <UserList users={results} navToUser={navToUser} />
    </View>
  )
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    width: Dimensions.get('window').width,
  },

  // ------------------------ SEARCH MESSAGE

  searchMessageWrapper: {
    width: '100%',
    height: 60,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchMessage: {
    color: colors.midGrey,
  },

})

export default SearchResults;
