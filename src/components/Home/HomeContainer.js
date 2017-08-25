
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

    console.log(this.props.questions)
  }

  // Get questions
  componentDidMount() {
    getAllQuestions(questions => {
      this.props.updateQuestions(questions);
    //   this.context.store.dispatch(setQuestions(questions));
    //   console.log(this.context.store.getState())
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

// HomeContainer.contextTypes = {
//   store: PropTypes.object
// };


// export default HomeContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
