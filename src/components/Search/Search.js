import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import UserList from '../UserList/UserList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CustomTopNavOverlay from '../TopNav/CustomTopNavOverlay';

import colors from '../../util/design/colors';

const Search = ({ searching, searchResults, users, navToUser }) => {
  return (
    <View style={styles.container}>
      { searching ? (
        <SearchResults results={searchResults} navToUser={navToUser} />
      ) : (
        <UserList users={users} navToUser={navToUser} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: 'white',
  },
});

export default Search;
