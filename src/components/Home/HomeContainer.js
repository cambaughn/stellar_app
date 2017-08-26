
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';

import { getAllQuestions } from '../../util/getQuestions';
import { setQuestions } from '../../redux/actionCreators';


class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.navToUser = this.navToUser.bind(this);
  }

  componentDidMount() {
    // Get questions and dispatch Redux action
    getAllQuestions(questions => {
      this.props.updateQuestions(questions);
    })
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

  render() {
    return (
      <View>
        <Home questions={this.props.questions} navToUser={this.navToUser} />
      </View>
    )
  }
}



const mapStateToProps = state => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateQuestions: questions => dispatch(setQuestions(questions))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
