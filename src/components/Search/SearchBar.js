import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Animated } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { searchUsers } from '../../util/requestHelpers/search';
import colors from '../../util/design/colors';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      searchWidth: new Animated.Value(Dimensions.get('window').width - 40),
      cancelOpacity: new Animated.Value(0),
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearText = this.clearText.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.animateSearchBar = this.animateSearchBar.bind(this);
    this.animateCancel = this.animateCancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searching) {
      this.animateSearchBar(Dimensions.get('window').width - 105);
      this.animateCancel(1);
    } else {
      this.animateSearchBar(Dimensions.get('window').width - 40);
      this.animateCancel(0);
    }
  }

  animateSearchBar(width) {
    Animated.timing(                                   // Animate over time
      this.state.searchWidth,                          // The animated value to drive
      {
        toValue: width,                              // Animate to width
        duration: 300,                                 // Make it take a while
      }
    ).start();
  }

  animateCancel(opacity) {
    Animated.timing(                                   // Animate over time
      this.state.cancelOpacity,                        // The animated value to drive
      {
        toValue: opacity,                              // Animate to width
        duration: 300,                                 // Make it take a while
      }
    ).start();
  }

  handleInputChange(searchText) {
    this.setState({ searchText });

    // Live search
    searchUsers(searchText, response => this.props.setSearchResults(response));
  }

  clearText() {
    this.setState({ searchText: '' });
    this.props.setSearchResults([]);
  }

  handleCancel() {
    this.clearText();
    this.searchInput.blur();
    this.props.setSearching(false);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.searchBar, {width: this.state.searchWidth}]}>
          <View style={styles.inputGroup}>
            <Icon name={'search'} style={styles.searchIcon} />

            <View>
              <TextInput
                style={styles.input}
                placeholder={`Search`}
                placeholderTextColor={colors.midGrey}
                autoCorrect={false}
                autoCapitalize={'none'}
                returnKeyType={'search'}
                maxLength = {35}
                selectionColor={colors.midGrey}

                onFocus={() => this.props.setSearching(true) }
                onChangeText={this.handleInputChange}
                value={this.state.searchText}
                onSubmitEditing={() => console.log('SUBMITTING')}

                ref={ input => this.searchInput = input }
              />
            </View>

          </View>

          { this.state.searchText.length > 0 &&
            <Icon
              name={'times-circle'}
              style={styles.clearIcon}
              onPress={this.clearText}
            />
          }
        </Animated.View>

        <Animated.Text
          style={[styles.cancelText, {opacity: this.state.cancelOpacity}]}
          onPress={this.handleCancel}
        >
          Cancel
        </Animated.Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    width: Dimensions.get('window').width,
    height: '100%',
    paddingLeft: 20,

    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // ------------------------ SEARCH BAR

  searchBar: {
    backgroundColor: colors.lightGrey,
    // width: Dimensions.get('window').width - 40,
    height: 28,

    borderRadius: 5,

    paddingLeft: 15,
    paddingRight: 15,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    minWidth: Dimensions.get('window').width - 170,
    paddingTop: 2,

    fontSize: 15,

    // backgroundColor: 'pink',
  },

  // ------------------------ ICONS
  searchIcon: {
    marginRight: 7,

    fontSize: 14,
    color: colors.midGrey,
  },

  clearIcon: {
    marginLeft: 7,

    fontSize: 17,
    color: colors.midGrey,
  },

  // ------------------------ CANCEL TEXT

  cancelText: {
    color: colors.blue,
    fontSize: 16,
    marginLeft: 15,
  },

})

export default SearchBar;
