import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import UserList from '../UserList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CustomTopNavOverlay from '../TopNav/CustomTopNavOverlay';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomTopNavOverlay style={{backgroundColor: 'white'}}>
          <SearchBar />
        </CustomTopNavOverlay>
        <UserList users={this.props.users} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Search;
