import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../util/colors';

const AnsweredQuestion = ({ question }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.questionAnswerer}>
          <Link to={`/user/${question.answerer.id}`} style={styles.link} underlayColor='white'>
            <Text style={styles.bold}>{question.answerer.name}</Text>
          </Link>
        </View>

        <Link to={{
          pathname: `/record_answer/${question.id}`,
          state: { question: question }
        }}
        >
          {/* <Text style={styles.replyText}>Reply</Text> */}
          <Icon name={'play'} style={styles.replyText} />
        </Link>

      </View>

      <Text style={styles.questionText}>{question.text}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    minHeight: 50,

    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',

    width: Dimensions.get('window').width - 20,
  },

  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  questionAnswerer: {
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
    fontSize: 15,
  }
})

export default AnsweredQuestion;
