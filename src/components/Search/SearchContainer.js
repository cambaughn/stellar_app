import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Search from './Search';

import { getAllUsers } from '../../util/getUsers';
import { setUsers } from '../../redux/actionCreators';


class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.setNavigator();
  }

  setNavigator = () => {
    this.props.navigator.setStyle({
      navBarTextColor: 'black',
      navBarTextFontSize: 16,

      navBarCustomView: 'stellar.SearchBar',
    });
  }

  navToUser = (user) => {
    this.props.navigator.push({
      screen: 'stellar.UserProfile',
      title: user.username,
      backButtonTitle: '',
      passProps: {
        user
      },
      navigatorStyle: {
        navBarTextColor: 'black',
        navBarTextFontSize: 15,
      },
    })
  }


  componentDidMount() {
    getAllUsers(users => {
      this.props.updateUsers(users);
    });
  }


  render() {
    return (
      <View>
        <Search
          users={this.props.users}
          navToUser={this.navToUser}
          searching={this.props.search.searching}
          searchResults={this.props.search.searchResults}
        />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    users: state.users,
    search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUsers: users => dispatch(setUsers(users))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
