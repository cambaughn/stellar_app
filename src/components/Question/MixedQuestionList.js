import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';


const MixedQuestionList = ({ questions, navToUser }) => {
  return (
    <View style={styles.container}>
      { questions.map(question => {
        if (question.answers.length > 0) {
          return <AnsweredQuestion key={question.id} question={question} navToUser={navToUser} />
        } else {
          return <UnansweredQuestion key={question.id} question={question} navToUser={navToUser} />
        }
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  }
})


export default MixedQuestionList;
