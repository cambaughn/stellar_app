import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Search from './Search';

import { getAllUsers } from '../../util/getUsers';
import { setUsers } from '../../redux/actionCreators';


class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getAllUsers(users => {
      this.props.updateUsers(users);
    });
  }

  render() {
    return (
      <View>
        <Search users={this.props.users} />
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
