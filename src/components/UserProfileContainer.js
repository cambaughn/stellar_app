import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import AskQuestionModal from './AskQuestionModal';

import { getUserById } from '../util/getUsers';
import { getQuestionsByUserId } from '../util/getQuestions';
import { follow, isFollowing } from '../util/follow';
import { updateFocusedUser, setFocusedUserQuestions } from '../redux/actionCreators';


class UserProfileContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      following: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.checkFollowing = this.checkFollowing.bind(this);
    this.getData = this.getData.bind(this);
    this.store = this.props.store;
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleFollow() {
    let followerId = this.store.getState().currentUser.id;
    let followingId = this.store.getState().focusedUser.id;
    follow(followerId, followingId, follow => this.checkFollowing(followerId, followingId));

    this.getData(followingId);
  }

  checkFollowing(followerId, followingId) {
    isFollowing(followerId, followingId, following => this.setState({ following }));
  }

  getData(userId) {
    getUserById(userId, user => this.store.dispatch(updateFocusedUser(user)) );
    getQuestionsByUserId(userId, questions => this.store.dispatch(setFocusedUserQuestions(questions)));
    this.checkFollowing(this.store.getState().currentUser.id, userId);
  }

  render() {

    let userId = +this.props.match.params.userId;
    if (userId !== this.store.getState().focusedUser.id) {
      this.getData(userId);
    }

    return (
      <View>
        <UserProfile
          user={this.store.getState().focusedUser}
          questions={this.store.getState().focusedUserQuestions}
          toggleModal={this.toggleModal}
          handleFollow={this.handleFollow}
          following={this.state.following}
          isCurrentUser={this.store.getState().focusedUser.id === this.store.getState().currentUser.id}
        />
        <AskQuestionModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          asker={this.store.getState().currentUser}
          answerer={this.store.getState().focusedUser}
          getData={this.getData}
        />
      </View>
    )
  }


}

export default UserProfileContainer;
