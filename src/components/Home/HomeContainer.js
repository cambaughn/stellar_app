
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const PropTypes = require('prop-types');

import Home from './Home';

import { getAllQuestions } from '../../util/getQuestions';
import { setUsers, setQuestions, updateCurrentUser } from '../../redux/actionCreators';


class HomeContainer extends Component {
  constructor(props) {
    super(props);


  }

  // Get questions
  componentDidMount() {
    this.context.store.subscribe(this.forceUpdate.bind(this));
    
    getAllQuestions(questions => {
      this.context.store.dispatch(setQuestions(questions));
    })
  }

  render() {
    console.log('RENDERING')
    return (
      <View>
        <Home questions={this.context.store.getState().questions} />
      </View>
    )
  }
}

HomeContainer.contextTypes = {
  store: PropTypes.object
};


export default HomeContainer;
