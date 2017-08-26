import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import UserProfile from './UserProfile';
import AskQuestionModal from '../Question/AskQuestionModal';

import { getUserById } from '../../util/getUsers';
import { getQuestionsByUserId, getCurrentUserQuestions } from '../../util/getQuestions';
import { follow, isFollowing } from '../../util/follow';
import { updateFocusedUser, setFocusedUserQuestions } from '../../redux/actionCreators';


class UserProfileContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      questions: [],
      modalVisible: false,
      following: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.checkFollowing = this.checkFollowing.bind(this);
    this.getData = this.getData.bind(this);
    this.store = this.props.store;
  }

  componentDidMount() {
    this.getData(this.state.user.id);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleFollow() {
    let followerId = this.props.currentUser.id;
    let followingId = this.state.user.id;
    follow(followerId, followingId, follow => this.checkFollowing(followerId, followingId));

    this.getData(followingId);
  }

  checkFollowing(followerId, followingId) {
    isFollowing(followerId, followingId, following => this.setState({ following }));
  }

  getData(userId) {
    getUserById(userId, this.props.currentUser.id, user => {
      this.setState({ user });
    });

    if (userId === this.props.currentUser.id) {
      getCurrentUserQuestions(userId, questions => this.setState({ questions }));
    } else {
      getQuestionsByUserId(userId, questions => this.setState({ questions }));
    }
    this.checkFollowing(this.props.currentUser.id, userId);
  }

  render() {
    return (
      <View>
        <UserProfile
          user={this.state.user}
          questions={this.state.questions}
          toggleModal={this.toggleModal}
          handleFollow={this.handleFollow}
          following={this.state.following}
          isCurrentUser={this.state.user.id === this.props.currentUser}
        />
        <AskQuestionModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          asker={this.props.currentUser}
          answerer={this.state.user}
          getData={this.getData}
          />
      </View>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
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
)(UserProfileContainer);
