import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import UserList from '../UserList/UserList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CustomTopNavOverlay from '../TopNav/CustomTopNavOverlay';

import colors from '../../util/design/colors';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searching: false,
    }

    this.setSearching = this.setSearching.bind(this);
    this.setSearchResults = this.setSearchResults.bind(this);
  }

  setSearching(searching) {
    this.setState({ searching });
  }

  setSearchResults(searchResults) {
    this.setState({ searchResults });
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomTopNavOverlay style={{backgroundColor: 'white'}}>
          <SearchBar
            setSearching={this.setSearching}
            searching={this.state.searching}
            setSearchResults={this.setSearchResults}
          />
        </CustomTopNavOverlay>

        { this.state.searching ? (
          <SearchResults results={this.state.searchResults} />
        ) : (
          <UserList users={this.props.users} navToUser={this.props.navToUser} />
        )}
      </View>
    )
  }
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
