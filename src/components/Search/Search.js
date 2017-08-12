import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import UserList from '../UserList/UserList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CustomTopNavOverlay from '../TopNav/CustomTopNavOverlay';

import colors from '../../util/colors';

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
          <SearchBar toggleSearching={this.toggleSearching} searching={this.state.searching} />
          { this.state.searching &&
            <Text
              style={styles.cancelText}
              onPress={this.toggleSearching}
            >
              Cancel
            </Text>
          }
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: 'white',
  },

  // ------------------------ CANCEL TEXT

  cancelText: {
    color: colors.blue,
    fontSize: 16,
    marginLeft: 15,
  },
});

export default Search;
