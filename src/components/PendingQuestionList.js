import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import UnansweredQuestion from './UnansweredQuestion';


const PendingQuestionList = ({ questions }) => {
  return (
    <View style={styles.container}>
      { questions.map(question => {
        return <UnansweredQuestion key={question.id} question={question} />
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


export default PendingQuestionList;
