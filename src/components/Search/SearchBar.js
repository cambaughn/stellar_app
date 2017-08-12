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
    this.clearText = this.clearText.bind(this);
  }

  handleInputChange(searchText) {
    this.setState({ searchText });
    // Live search
  }

  clearText() {
    this.setState({ searchText: '' });
  }

  render() {
    return (
      <View style={[styles.container, this.props.searching && styles.searching]}>
        <View style={styles.inputGroup}>
          <Icon name={'search'} style={styles.searchIcon} />

          <View>
            <TextInput
              style={styles.input}
              placeholder={`Search`}
              placeholderTextColor={colors.midGrey}
              autoCorrect={false}
              returnKeyType={'search'}
              maxLength = {35}
              selectionColor={colors.midGrey}

              onFocus={this.props.toggleSearching}
              onChangeText={this.handleInputChange}
              value={this.state.searchText}
              onSubmitEditing={() => console.log('SUBMITTING')}
            />
          </View>

        </View>

        { this.state.searchText.length > 0 &&
          <Icon
            name={'times-circle'}
            style={styles.exitIcon}
            onPress={this.clearText}
          />
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    backgroundColor: colors.lightGrey,
    width: Dimensions.get('window').width - 40,
    height: 28,

    borderRadius: 5,

    paddingLeft: 15,
    paddingRight: 15,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searching: {
    width: Dimensions.get('window').width - 105,
  },

  // ------------------------ INPUT

  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  input: {
    height: 28,
    // minWidth: '70%',
    minWidth: Dimensions.get('window').width - 110,
    paddingTop: 2,

    fontSize: 15,
  },

  // ------------------------ ICONS
  searchIcon: {
    marginRight: 7,

    fontSize: 14,
    color: colors.midGrey,
  },

  exitIcon: {
    marginLeft: 7,

    fontSize: 17,
    color: colors.midGrey,
  }

})

export default SearchBar;
