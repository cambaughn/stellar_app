import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TimeAgo from 'react-native-timeago';

import RecordAnswer from './RecordAnswer';
import colors from '../../util/design/colors';

class UnansweredQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }


  render() {
    console.log(this.props.question)
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.questionAsker}>
            <TouchableHighlight
              underlayColor='white'
              onPress={() => this.props.navToUser(this.props.question.asker)}
            >
              <Text style={styles.bold}>{this.props.question.asker.name}</Text>
            </TouchableHighlight>

            <Text style={styles.username}>  @{this.props.question.asker.username} </Text>

          </View>

          <TouchableHighlight
            underlayColor={'white'}
            onPress={this.toggleModal}
          >
            <Icon name={'reply'} style={styles.replyButton} />
          </TouchableHighlight>

        </View>

        <Text style={styles.questionText}>{this.props.question.text}</Text>

        <TimeAgo style={styles.time} time={this.props.question.createdAt} hideAgo={false} />


        <RecordAnswer toggleModal={this.toggleModal} visible={this.state.modalVisible} question={this.props.question} />

      </View>
    )
  }
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    minHeight: 50,

    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',

    width: Dimensions.get('window').width - 20,
  },

  // ------------------------ NAME & USERNAME

  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  questionAsker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  bold: {
    fontWeight: 'bold',
  },

  username: {
    color: colors.darkGrey,
  },

  link: {
    marginBottom: 10,
  },

  // ------------------------ TIME

  time: {
    color: colors.midGrey,
    fontSize: 12,
  },


  // ------------------------ QUESTION

  questionText: {
    marginBottom: 10,
  },

  // ------------------------ PLAY BUTTON

  replyButton: {
    color: colors.midGrey,
    fontSize: 15,
  }
})

export default UnansweredQuestion;
