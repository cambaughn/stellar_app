import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../util/colors';

const UnansweredQuestion = ({ question }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.questionAsker}>
          <Link to={`/user/${question.asker.id}`} style={styles.link} underlayColor='white'>
            <Text style={styles.bold}>{question.asker.name}</Text>
          </Link>
          <Text> asks:</Text>
        </View>

        <Link to={{
          pathname: `/record_answer/${question.id}`,
          state: { question: question }
        }}
        >
          {/* <Text style={styles.replyText}>Reply</Text> */}
          <Icon name={'reply'} style={styles.replyText} />
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
    fontSize: 15,
  }
})

export default UnansweredQuestion;
