
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
  }

  componentDidMount() {
    // Get questions
    getAllQuestions(questions => {
      this.props.updateQuestions(questions);
    })
  }

  render() {
    return (
      <View>
        <Home questions={this.props.questions} />
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
