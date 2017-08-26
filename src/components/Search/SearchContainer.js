import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Search from './Search';

import { getAllUsers } from '../../util/getUsers';
import { setUsers } from '../../redux/actionCreators';


class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.navToUser = this.navToUser.bind(this);
  }

  navToUser(user) {
    this.props.navigator.push({
      screen: 'stellar.Search',
      title: user.username,
      backButtonTitle: '',
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
        <Search users={this.props.users} navToUser={this.navToUser} />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    users: state.users
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
