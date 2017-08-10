import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../util/colors';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(searchText) {
    this.setState({ searchText });
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name={'search'} style={styles.icon} />
        <View>
          <TextInput
            style={styles.input}
            placeholder={`Search`}
            placeholderTextColor={colors.midGrey}
            autoCorrect={false}
            returnKeyType={'search'}
            maxLength = {40}
            selectionColor={colors.midGrey}

            onChangeText={this.handleInputChange}
            value={this.state.searchText}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    backgroundColor: colors.lightGrey,
    width: Dimensions.get('window').width - 40,
    height: 25,

    borderRadius: 5,

    paddingLeft: 20,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // ------------------------ INPUT
  input: {
    // backgroundColor: 'lightgreen',

    height: 25,
    minWidth: '90%',

    fontSize: 15,
  },

  // ------------------------ ICON
  icon: {
    // backgroundColor: 'coral',

    fontSize: 15,
    color: colors.midGrey,

    marginRight: 7,
  },

})

export default SearchBar;
