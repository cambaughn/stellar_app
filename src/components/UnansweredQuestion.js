import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import colors from '../util/colors';

const UnansweredQuestion = ({ question }) => {
  return (
    <View style={styles.container}>
      <View style={styles.questionAsker}>
        <Link to={`/user/${question.asker.id}`} style={styles.link} underlayColor='white'>
          <Text style={styles.bold}>{question.asker.name}</Text>
        </Link>
        <Text> asks:</Text>
      </View>

      <Text style={styles.questionText}>{question.text}</Text>

      <Link to={{
        pathname: `/record_answer/${question.id}`,
        state: { question: question }
      }}
      >
        <Text style={styles.replyText}>Reply</Text>
      </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    minHeight: 50,

    paddingTop: 20,
    paddingBottom: 20,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',

    width: Dimensions.get('window').width - 20,
  },

  questionAsker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  bold: {
    fontWeight: 'bold',
  },

  link: {
    marginBottom: 10,
  },

  questionText: {
    marginBottom: 10,
  },

  replyText: {
    color: colors.midGrey,
  }
})

export default UnansweredQuestion;
