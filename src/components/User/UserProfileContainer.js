import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import UserProfile from './UserProfile';
import AskQuestionModal from '../Question/AskQuestionModal';

import { getUserById } from '../../util/getUsers';
import { getQuestionsByUserId, getCurrentUserQuestions } from '../../util/getQuestions';
import { follow, isFollowing } from '../../util/follow';
import { updateFocusedUser, setFocusedUserQuestions } from '../../redux/actionCreators';
import { iconsMap } from '../../util/navigation/appIcons';


class UserProfileContainer extends Component {

  static navigatorButtons = {

  }

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user || this.props.currentUser,
      questions: [],
      modalVisible: false,
      following: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.checkFollowing = this.checkFollowing.bind(this);
    this.getData = this.getData.bind(this);
    this.navToUser = this.navToUser.bind(this);
    this.setNavigator = this.setNavigator.bind(this);
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.navToSettings = this.navToSettings.bind(this);

    this.setNavigator();
  }

  setNavigator() {
    this.props.navigator.setTitle({ title: this.state.user.username });

    this.props.navigator.setStyle({
      navBarTextColor: 'black',
      navBarTextFontSize: 15,
    });

    this.props.navigator.setButtons({
      rightButtons: [
        {
         icon: iconsMap['cog'],
         id: 'settings',
       }
      ]
    })

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'settings') {
        this.navToSettings();
      }
    }
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

  navToUser(user) {
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

  navToSettings() {
    this.props.navigator.push({
      screen: 'stellar.Settings',
      title: 'Settings',
      backButtonTitle: '',
      passProps: {
        user: this.state.user,
      },
      navigatorStyle: {
        navBarTextColor: 'black',
        navBarTextFontSize: 15,
      },
    })
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
          isCurrentUser={this.state.user.id === this.props.currentUser.id}
          navToUser={this.navToUser}
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
