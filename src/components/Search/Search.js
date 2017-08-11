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
      searching: false,
    }

    this.toggleSearching = this.toggleSearching.bind(this);
  }

  toggleSearching() {
    this.setState({ searching: !this.state.searching })
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomTopNavOverlay style={{backgroundColor: 'white'}}>
          <SearchBar toggleSearching={this.toggleSearching} />
        </CustomTopNavOverlay>

        { this.state.searching ? (
          <SearchResults results={this.state.searchResults} />
        ) : (
          <UserList users={this.props.users} />
        )}
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
