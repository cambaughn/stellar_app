import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import AnsweredQuestionList from '../Question/AnsweredQuestionList';

const Home = ({ questions, navToUser }) => {
  console.log(questions)
  if (questions.length) {
    return (
      <ScrollView style={styles.scrollView}>
        <AnsweredQuestionList questions={questions} navToUser={navToUser} />
      </ScrollView>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>You're not following anyone yet</Text>
        <Text style={styles.smallText}>Search for friends to follow →</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    height: Dimensions.get("window").height - 150,

    paddingTop: 30,
    paddingRight: 30,
  },

  scrollView: {
    height: Dimensions.get("window").height - 200,
  },

  bigText: {
    fontWeight: '500',
    fontSize: 30,

    paddingLeft: 30,
    marginBottom: 15,
  },

  smallText: {
    fontWeight: '400',
    fontSize: 15,

    paddingLeft: 30,
    marginBottom: 15,
  },
});

export default Home;
