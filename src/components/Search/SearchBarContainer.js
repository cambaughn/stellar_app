
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { setSearchResults, setSearching } from '../../redux/actionCreators';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <SearchBar
          searching={this.props.search.searching}
          setSearchResults={this.props.setSearchResults}
          setSearching={this.props.setSearching}
        />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    search: state.search,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchResults: results => dispatch(setSearchResults(results)),
    setSearching: results => dispatch(setSearching(results)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarContainer);
