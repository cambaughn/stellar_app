import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TimeAgo from 'react-native-timeago';

import WatchVideoModal from './WatchVideoModal';
import ProfilePhoto from '../User/ProfilePhoto';
import colors from '../../util/design/colors';

class AnsweredQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
  }


  toggleModal(time) {

    if (time > 0) {
      setTimeout(() => {
        this.setState({ modalVisible: !this.state.modalVisible });
      }, time);
    } else {
      this.setState({ modalVisible: !this.state.modalVisible });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.questionAnswerer}>
            <Link to={`/user/${this.props.question.answerer.id}`} style={styles.link} underlayColor='white'>
              <Text style={styles.bold}>{this.props.question.answerer.name}</Text>
            </Link>

            <Text style={styles.username}>  @{this.props.question.answerer.username} </Text>
          </View>

          <TouchableHighlight
            underlayColor={'white'}
            onPress={this.toggleModal}
          >
            <Icon name={'play'} style={styles.playButton} />
          </TouchableHighlight>

        </View>


        <Text style={styles.questionText}>{this.props.question.text}</Text>
        <TimeAgo style={styles.time} time={this.props.question.answers[0].createdAt} hideAgo={false} />

        <WatchVideoModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          question={this.props.question}
          answer={this.props.question.answers[0]}
        />

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
  },

  questionAnswerer: {
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

  // ------------------------ NAME

  time: {
    color: colors.midGrey,
    fontSize: 12,
  },


  // ------------------------ QUESTION

  questionText: {
    marginBottom: 10,
  },

  // ------------------------ PLAY BUTTON

  playButton: {
    color: colors.midGrey,
    fontSize: 15,
  }
})

export default AnsweredQuestion;
